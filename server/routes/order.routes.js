const express = require("express");
const { sendRequiredFieldError, sendError } = require("../helper");
const { addOrder, createOrder } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const Razorpay = require("razorpay");
const crypto = require("crypto");

let RazorpayInstance = new Razorpay({
  key_id: process.env.RAZORYPAY_KEY_ID,
  key_secret: process.env.RAZORYPAY_KEY_SECRET,
});

const order = express.Router();

order.post("/", authMiddleware, async (req, res) => {
  try {
    const options = {
      amount: 500 * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    RazorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        return res.status(500).send({ message: "Something Went Wrong!" });
      }
      return res.send({ data: order });
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error!" });
  }
  return;
  const {
    amount = 0,
    deliveryAddress = "",
    status = "Processing",
    items = [],
    deliveredDate = "",
    deliveredBy = "",
  } = req.body;
  if (!items.length) return sendRequiredFieldError(res);
  let data = {
    customer: req.body.userId,
    amount,
    deliveryAddress,
    status,
    items,
    deliveredDate,
    deliveredBy,
  };
  try {
    let order = await addOrder(data);
    res.send({ message: "Order Successfull", data: order });
  } catch (error) {
    return sendError(res);
  }
});

order.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

module.exports = order;
