import { sendError } from "../../../server/helper";
import { dbConnect } from "../../../server/config";
import {
  checkAccount,
  createAccount,
  getGithubData,
  getTokens,
  updateCart,
} from "../../../server/controllers";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "GET") {
      const userData = await getGithubData(req.query.code);
      let user = await checkAccount("email", userData.email.toLowerCase());
      if (!user) {
        user = await createAccount(userData.name, "", userData.email, v4(), true);
        await updateCart(user._id, []);
      }
      const { accessToken, refreshToken } = getTokens(user._id, user.name, user.email);
      return res.send({
        message: "Login Successfull",
        data: {
          accessToken,
          refreshToken,
          name: user.firstName + " " + user.lastName,
          email: user.email,
        },
      });
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default handler;
