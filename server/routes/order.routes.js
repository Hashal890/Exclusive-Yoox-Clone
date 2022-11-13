const express = require("express");
const { sendRequiredFieldError, sendError } = require("../helper");
const { addOrder, createOrder, getCustomerCartItems } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const Razorpay = require("razorpay");
const crypto = require("crypto");

let RazorpayInstance = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_ID,
  key_secret: process.env.NEXT_PUBLIC_RAZORYPAY_KEY_SECRET,
});

const order = express.Router();

order.post("/", authMiddleware, async (req, res) => {
  let { userId, address } = req.body;
  try {
    let customerCartItems = await getCustomerCartItems(req.body.userId);
    let items = customerCartItems[0].items;
    let amount = items.reduce((acc, el) => acc + el.item.current_price * el.quantity, 0);
    let orderData = {
      customer: userId,
      amount,
      items,
      deliveryAddress: address,
    };

    //razorpay options
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    RazorpayInstance.orders.create(options, async (error, order) => {
      if (error) {
        return res.status(500).send({ message: "Something Went Wrong!" });
      }
      let customerOrder = await addOrder(orderData);
      return res.send({ data: order });
    });
  } catch (error) {
    return sendError(res, error);
  }
});

order.post("/verify", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.NEXT_PUBLIC_RAZORYPAY_KEY_SECRET)
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
