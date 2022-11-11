const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDMAIL_ID,
    pass: process.env.SENDMAIL_PASSWORD,
  },
});

const sendEmail = async (message) => {
  try {
    const info = await transporter.sendMail({
      from: "Yoox <sanjayg.8237@gmail.com>",
      ...message,
    });
    return info;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { sendEmail };
