const express = require("express");
const { checkAccount, createAccount } = require("../controllers");
const { sendRequiredFieldError } = require("../helper");
const { userModel } = require("../models");

const user = express.Router();

user.get("/", async (req, res) => {
  res.send("Hello Hi By");
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
  } catch (error) {}
});

module.exports = user;
