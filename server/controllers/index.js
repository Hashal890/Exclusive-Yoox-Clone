const { checkAccount, createAccount } = require("./user.controllers");
const { sendEmail } = require("./email.controller");
const {
  getAccessToken,
  getRefreshToken,
  getTokens,
  verifyAccessToken,
} = require("./jwt.controller");
const passport = require("./google.controller");

module.exports = {
  checkAccount,
  createAccount,
  sendEmail,
  getAccessToken,
  getRefreshToken,
  getTokens,
  verifyAccessToken,
  passport,
};
