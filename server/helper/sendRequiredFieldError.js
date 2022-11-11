const sendRequiredFieldError = (res, message) => {
  res.send({ message: message || "Required data is missing" });
};

module.exports = { sendRequiredFieldError };
