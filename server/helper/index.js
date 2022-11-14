const { sendRequiredFieldError } = require("./sendRequiredFieldError");
const { sendError } = require("./sendError");
const { welcomeEmailTemplate } = require("./email.templates");

module.exports = { sendRequiredFieldError, sendError, welcomeEmailTemplate };
