const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    size: { type: String },
    variant_sku: { type: String },
    brand: { type: String },
    care_instructions: { type: String },
    dominant_material: { type: String },
    title: { type: String },
    actual_color: { type: String },
    dominant_color: { type: String },
    product_type: { type: String },
    type: { type: String },
    body: { type: String },
    product_details: { type: String },
    size_fit: { type: String },
    complete_the_look: { type: String },
    ideal_for: { type: String },
    is_in_stock: { type: Boolean },
    specifications: { type: String },
    original_price: { type: Number },
    current_price: { type: Number },
    inventory: { type: Number },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

module.exports = productModel;
