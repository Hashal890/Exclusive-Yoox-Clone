const jwt = require("jsonwebtoken");
const { verifyAccessToken } = require("../controllers");

const authMiddleware = (req, res, next) => {
  let accessToken = req.headers["access-token"];
  if (accessToken) {
    try {
      let user = verifyAccessToken(accessToken);
      req.body.userId = user.userid;
      next();
    } catch (error) {
      return res.status(498).send({ status: false, message: error.message });
    }
  } else {
    return res.status(401).send({ status: false, message: "Unauthorized Request" });
  }
};

module.exports = { authMiddleware };
