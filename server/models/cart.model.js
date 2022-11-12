const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    items: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
        quantity: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
