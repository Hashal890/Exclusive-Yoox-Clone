const { productModel } = require("../models");

const getProducts = async (page, limit, sortBy, order) => {
  try {
    return await productModel
      .find({})
      .sort({ [sortBy]: order == "asc" ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(limit);
  } catch (error) {
    throw new Error((error.message = "Product not found"));
  }
};

module.exports = { getProducts };
