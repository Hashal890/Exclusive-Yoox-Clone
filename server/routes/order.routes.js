const express = require("express");
const { sendRequiredFieldError, sendError } = require("../helper");
const { addOrder } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const order = express.Router();

order.post("/", async (req, res) => {
  const {
    userId,
    amount = 0,
    deliveryAddress = "",
    status = "Processing",
    items = [],
    deliveredDate = "",
    deliveredBy = "",
  } = req.body;
  if (!customer) return sendRequiredFieldError(res);
  let data = {
    customer: userId,
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

module.exports = order;
