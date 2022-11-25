import { passport } from "../../../../server/controllers";
import nextConnect from "next-connect";
import session from "express-session";

export default nextConnect()
  .use(passport.initialize())
  .get(
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
