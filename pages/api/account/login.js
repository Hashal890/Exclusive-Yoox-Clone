import { dbConnect } from "../../../server/config";
import { getTokens } from "../../../server/controllers";
import { sendError, sendRequiredFieldError } from "../../../server/helper";
import { userModel } from "../../../server/models";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  if (method == "POST") {
    const { email, password } = req.body;

    if (!email || !password) return sendRequiredFieldError(res);
    try {
      let user = await userModel.findOne({ email: email.toLowerCase(), password });
      if (user) {
        const { accessToken, refreshToken } = getTokens(user.id, user.firstName, user.email);
        return res.send({
          message: "Login Successfull",
          data: {
            accessToken,
            refreshToken,
            name: user.firstName + " " + user.lastName,
            email: user.email,
          },
        });
      } else {
        return res.status(401).send({ status: false, message: "Credentials mismatch" });
      }
    } catch (error) {
      return sendError(res, error);
    }
  }
  return sendError(res, 401, "Not a valid route");
};
export default handler;
