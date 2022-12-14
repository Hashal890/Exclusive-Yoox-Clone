import { verifyAccessToken } from "../server/controllers";

const withAuth = (handler) => {
  return (req, res) => {
    let accessToken = req.headers["access-token"];
    if (accessToken) {
      try {
        let user = verifyAccessToken(accessToken);
        let body = req.body;
        req.body = {};
        req.body = { ...body, userId: user.userid };
        // req.body.userId = user.userid;
        return handler(req, res);
      } catch (error) {
        return res.status(498).send({ status: false, message: error.message });
      }
    } else {
      return res.status(401).send({ status: false, message: "Unauthorized Request" });
    }
  };
};

export default withAuth;
