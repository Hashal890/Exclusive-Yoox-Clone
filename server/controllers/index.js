const { checkAccount, createAccount } = require("./user.controllers");
const { sendEmail } = require("./email.controller");

module.exports = { checkAccount, createAccount, sendEmail };
