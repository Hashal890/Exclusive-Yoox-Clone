const { productModel } = require("../models");

const getProducts = async (page, limit, sortBy, order, others) => {
  console.log(others);
  try {
    let data = await productModel
      .aggregate([
        { $match: { ...others } },
        {
          $facet: {
            data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
            totalCount: [{ $count: "count" }],
          },
        },
      ])
      .collation({ locale: "en", strength: 2 });

    return { data: data[0].data, totalCount: data[0].totalCount[0].count };
  } catch (error) {
    throw new Error((error.message = "Product not found"));
  }
};

const getProductById = async (id) => {
  try {
    return await productModel.findById(id);
  } catch (error) {
    throw new Error((error.message = "Product not found"));
  }
};

module.exports = { getProducts, getProductById };
