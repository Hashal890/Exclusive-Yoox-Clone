const mongoose = require("mongoose");

const dbConnect = async () => {
  return await mongoose.connect(process.env.MONGODB_URL);
};

const dbDisconnect = async () => {
  return await mongoose.disconnect();
};

module.exports = { dbConnect, dbDisconnect };
