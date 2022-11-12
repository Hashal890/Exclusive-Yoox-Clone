const express = require("express");
const { sendRequiredFieldError, sendError } = require("../helper");
const { addOrder } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const order = express.Router();

order.post("/", authMiddleware, async (req, res) => {
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

module.exports = order;
