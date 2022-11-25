import { sendError } from "../../../../server/helper";
import { dbConnect } from "../../../../server/config";
import { checkAccount, createAccount, getTokens, passport } from "../../../../server/controllers";
import nextConnect from "next-connect";
// const handler = async (req, res) => {
//   const { method } = req;
//   await dbConnect();

//   try {
//     if (method == "GET") {

//     }

//     return res.status(401).json({ message: "Not a valid route" });
//   } catch (error) {
//     return sendError(res, error);
//   }
// };

export default nextConnect().get(
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async function (req, res) {
    await dbConnect();
    let user = await checkAccount("email", req.user.email.toLowerCase());
    if (!user)
      user = await createAccount(
        req.user.given_name,
        req.user.family_name,
        req.user.email,
        v4(),
        true
      );
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

    //   res.redirect("/");
  }
);
