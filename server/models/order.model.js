const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    amount: { type: Number, required: true },
    deliveryAddress: { type: String },
    orderStatus: {
      type: String,
      enum: [
        "Disptaching",
        "In transit",
        "Out for delivery",
        "Completed",
        "Pending",
        "Failed",
        "Processing",
        "Returned",
        "Canceled",
        "Refunded",
      ],
      default: "Processing",
    },
    items: [
      {
        item: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
        quantity: { type: Number },
        price: { type: Number },
      },
    ],
    deliveredDate: { type: Date },
    deliveredBy: { type: String },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
