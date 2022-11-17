const { checkAccount, createAccount } = require("./user.controllers");
const { sendEmail } = require("./email.controller");
const {
  getAccessToken,
  getRefreshToken,
  getTokens,
  verifyAccessToken,
} = require("./jwt.controller");
const { getGithubData } = require("./github.controller");
const passport = require("./google.controller");
const { getProducts, getProductById } = require("./product.controller");
const { addOrder, getOrder } = require("./order.controller");
const {
  updateCart,
  getCustomerCartItems,
  clearCustomerCart,
  addItemToCart,
} = require("./cart.controller");
const { createOrder, verifyOrder } = require("./payment.controller");

module.exports = {
  checkAccount,
  createAccount,
  sendEmail,
  getAccessToken,
  getRefreshToken,
  getTokens,
  getGithubData,
  verifyAccessToken,
  passport,
  getProducts,
  getProductById,
  addOrder,
  getOrder,
  updateCart,
  getCustomerCartItems,
  clearCustomerCart,
  addItemToCart,
  createOrder,
  verifyOrder,
};
