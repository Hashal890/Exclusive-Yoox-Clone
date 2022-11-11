const express = require("express");
const { sendError } = require("next/dist/server/api-utils");
const { checkAccount, createAccount, getTokens } = require("../controllers");
const { getGithubData } = require("../controllers/github.controller");
const { sendRequiredFieldError } = require("../helper");
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
      await createAccount(firstName, lastName, email, password);
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
    if (!user._id) user = await createAccount(userData.name, userData.email, v4(), true);
    const { accessToken, refreshToken } = getTokens(user._id, user.name, user.email);
    return res.send({
      message: "Login Successfull",
      data: { accessToken, refreshToken, name: user.name, email: user.email },
    });
  } catch (error) {
    return sendError(res, error);
  }
});

module.exports = user;
