const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/users/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile._json);
    }
  )
);

module.exports = passport;
