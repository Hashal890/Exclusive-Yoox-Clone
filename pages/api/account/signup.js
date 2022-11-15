import { dbConnect } from "../../../server/config";
import { sendError, sendRequiredFieldError } from "../../../server/helper";
import { checkAccount, createAccount, updateCart } from "../../../server/controllers";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  try {
    if (method == "POST") {
      const { firstName, lastName = "", email, password } = req.body;
      if (!firstName || !email || !password) return sendRequiredFieldError(res);

      try {
        let user = await checkAccount("email", email.toLowerCase());
        if (user) {
          return res.status(409).send({ status: false, message: "Email Id already exist" });
        } else {
          user = await createAccount(firstName, lastName, email, password);
          await updateCart(user._id, []);
          return res.send({
            message: "Account created Successfully. Email sent for account activation",
          });
        }
      } catch (error) {
        return sendError(res, error);
      }
    }
    return res.status(401).json({ message: "Not a valid route" });
  } catch (error) {
    return sendError(res, error);
  }
};
export default handler;
