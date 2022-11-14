const express = require("express");
const { v4 } = require("uuid");
const { checkAccount, createAccount, getTokens, passport, updateCart } = require("../controllers");
const { getGithubData } = require("../controllers/github.controller");
const { sendRequiredFieldError, sendError } = require("../helper");
const { userModel } = require("../models");

const user = express.Router();

user.get("/", async (req, res) => {
  res.send("login, signup etc. request");
});

user.post("/signup", async (req, res) => {
  const { firstName, lastName = "", email, password } = req.body;
  if (!firstName || !email || !password) sendRequiredFieldError(res);

  try {
    const user = await checkAccount("email", email.toLowerCase());
    if (user) {
      return res.status(409).send({ status: false, message: "Email Id already exist" });
    } else {
      user = await createAccount(firstName, lastName, email, password);
      await updateCart(user._id, []);
      res.send({ message: "Account created Successfully. Email sent for account activation" });
    }
  } catch (error) {
    return sendError(res, error);
  }
});

user.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) sendRequiredFieldError(res);
  try {
    let user = await userModel.findOne({ email: email.toLowerCase(), password });
    if (user) {
      const { accessToken, refreshToken } = getTokens(user.id, user.firstName, user.email);
      res.send({
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
});

user.get("/github", async (req, res) => {
  const userData = await getGithubData(req.query.code);
  try {
    let user = await checkAccount("email", userData.email.toLowerCase());
    if (!user) user = await createAccount(userData.name, "", userData.email, v4(), true);
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
  } catch (error) {
    return sendError(res, error);
  }
});

user.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

user.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login", session: false }),
  async function (req, res) {
    try {
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
    } catch (error) {
      return sendError(res, error);
    }
  }
);

module.exports = user;
