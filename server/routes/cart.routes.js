const express = require("express");
const { updateCart, getCustomerCartItems } = require("../controllers");
const { sendRequiredFieldError, sendError } = require("../helper");
const { authMiddleware } = require("../middlewares");
const cart = express.Router();

cart.get("/", authMiddleware, async (req, res) => {
  const customer = req.body.userId;
  try {
    let cartItems = await getCustomerCartItems(customer);
    res.send({ message: "Data found", data: cartItems });
  } catch (error) {
    return sendError(res, error);
  }
});

cart.patch("/", authMiddleware, async (req, res) => {
  let { userId, items } = req.body;

  console.log(req.body)

  if (!userId || !items) return sendRequiredFieldError(res);
  try {
    let cartItem = await updateCart(userId, items);
    return res.send({ message: "cart updated", data: cartItem });
  } catch (error) {
    return sendError(res, error);
  }
});



module.exports = cart;
