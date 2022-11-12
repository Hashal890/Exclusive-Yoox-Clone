const express = require("express");
const { sendRequiredFieldError, sendError } = require("../helper");
const { addOrder } = require("../controllers");
const { authMiddleware } = require("../middlewares");
const order = express.Router();

order.post("/", async (req, res) => {
  const {
    customer,
    amount = 0,
    deliveryAddress = "",
    status = "Processing",
    items = [],
    deliveredDate = "",
    deliveredBy = "",
    ...others
  } = req.body;
  if (!customer) sendRequiredFieldError(res);
  let data = {
    customer,
    amount,
    deliveryAddress,
    status,
    items,
    deliveredDate,
    deliveredBy,
    others,
  };
  try {
    let order = await addOrder(data);
    res.send({ message: "Order Successfull", data: order });
  } catch (error) {
    sendError(res);
  }
});

module.exports = order;
