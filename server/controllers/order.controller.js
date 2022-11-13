const { orderModel } = require("../models");

const addOrder = async (data) => {
  try {
    return await orderModel.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOrder = async (key, value) => {
  try {
    return await orderModel.find({ key, value });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { addOrder, getOrder };
