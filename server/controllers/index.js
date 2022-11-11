const { checkAccount, createAccount } = require("./user.controllers");
const { sendEmail } = require("./email.controller");
const { getAccessToken, getRefreshToken, getTokens } = require("./jwt.controller");

module.exports = {
  checkAccount,
  createAccount,
  sendEmail,
  getAccessToken,
  getRefreshToken,
  getTokens,
};
