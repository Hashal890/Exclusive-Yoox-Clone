const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/account/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      return cb(null, profile._json);
    }
  )
);

// passport.serializeUser stores user object passed in the cb method above in req.session.passport
// passport.serializeUser((user, cb) => {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

// passport.deserializeUser stores the user object in req.user
// passport.deserializeUser(function (user, cb) {
//   process.nextTick(function () {
//     return cb(null, user);
//   });
// });

// for broader explanation of serializeUser and deserializeUser visit https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

// An article that explains the concept of process.nextTick https://nodejs.dev/learn/understanding-process-nexttick

module.exports = passport;
