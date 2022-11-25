const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Db connected");
  return;
};

const dbDisconnect = async () => {
  await mongoose.disconnect();
};

module.exports = { dbConnect, dbDisconnect };
