const sendError = (res, err, code = 400) => {
  return res.status(code).send({ status: false, message: err.message });
};

module.exports = { sendError };
