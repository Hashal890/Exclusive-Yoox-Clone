const { v4 } = require("uuid");
const { userModel } = require("../models/");
const { sendEmail } = require("./email.controller");
const Redis = require("ioredis");
const { welcomeEmailTemplate } = require("../helper");
const redis = new Redis(process.env.REDIS_DB);

const checkAccount = async (key, vaule) => {
  try {
    let user = await userModel.findOne({ [key]: vaule }, { password: 0 });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const createAccount = async (firstName, lastName, email, password, emailVerified = false) => {
  try {
    let newUser = await userModel.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      password,
      status: emailVerified,
    });
    delete newUser["password"];
    if (!emailVerified) await sendVarificationLink(newUser.id, firstName, email);
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

const sendVarificationLink = async (userid, firstName, email) => {
  let v4id = v4();
  try {
    await redis.set(v4id, userid, "ex", 600);
    const message = {
      to: email,
      subject: "Welcome to Yoox",
      html: welcomeEmailTemplate({ name: firstName, token: v4id }),
    };
    return await sendEmail(message);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { checkAccount, createAccount };
