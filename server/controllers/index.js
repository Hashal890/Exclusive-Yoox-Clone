const { checkAccount, createAccount } = require("./user.controllers");
const { sendEmail } = require("./email.controller");
const {
  getAccessToken,
  getRefreshToken,
  getTokens,
  verifyAccessToken,
} = require("./jwt.controller");
const passport = require("./google.controller");
const { getProducts, getProductById } = require("./product.controller");
const { addOrder } = require("./order.controller");
const { updateCart, getCustomerCartItems } = require("./cart.controller");

module.exports = {
  checkAccount,
  createAccount,
  sendEmail,
  getAccessToken,
  getRefreshToken,
  getTokens,
  verifyAccessToken,
  passport,
  getProducts,
  getProductById,
  addOrder,
  updateCart,
  getCustomerCartItems,
};
