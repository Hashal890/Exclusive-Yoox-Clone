const { orderModel } = require("../models");

const addOrder = async (data) => {
  console.log(data);
  try {
    return await orderModel.create(data);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { addOrder };
