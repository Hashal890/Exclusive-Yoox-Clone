const { cartModel } = require("../models");

const updateCart = async (customer, items) => {
  try {
    return cartModel.findOneAndUpdate(
      { customer },
      { customer, items },
      { new: true, upsert: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const addItemToCart = async (customer, itemId) => {
  try {
    return cartModel.findOneAndUpdate(
      { customer },
      { $addToSet: { items: { item: itemId } } },
      { new: true }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const getCustomerCartItems = async (customer) => {
  try {
    return await cartModel
      .find({ customer })
      .populate("items.item", [
        "size",
        "brand",
        "title",
        "actual_color",
        "type",
        "images",
        "original_price",
        "current_price",
      ]);
  } catch (error) {
    throw new Error(error);
  }
};

const clearCustomerCart = async (customer) => {
  try {
    return await cartModel.findOneAndUpdate({ customer }, { items: [] });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { updateCart, getCustomerCartItems, clearCustomerCart, addItemToCart };
