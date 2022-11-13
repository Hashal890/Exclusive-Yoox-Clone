const Razorpay = require("razorpay");
const crypto = require("crypto");

let instance = new Razorpay({
  key_id: process.env.RAZORYPAY_KEY_ID,
  key_secret: process.env.RAZORYPAY_KEY_SECRET,
});

const createOrder = async (amount) => {};

const verifyOrder = async (razorpay_order_id, razorpay_payment_id, razorpay_signature) => {
  try {
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORYPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    return razorpay_signature === expectedSign;

    if (razorpay_signature === expectedSign) {
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    throw new Error("Internal Server Error!");
  }
};

module.exports = { createOrder, verifyOrder };
