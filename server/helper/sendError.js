const sendError = (res, err, code = 500) => {
  console.log("SEND Erro", err);
  return res.status(code).send({ status: false, message: err.message });
};

module.exports = { sendError };
