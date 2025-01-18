import { string } from "joi";
import { Schema } from "mongoose";

const couponSchema = new Schema({
  code: { type: String, unique: true, required: true },
  discount: { type: Number, required: true },
  minPrice: { type: Number },
  expirationDate: { type: Date },
  isExpired: { type: Boolean, default: false },
  isPercentage: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date().toISOString(), required: false },
  categories: { type: [String] },
  products: { type: [String] },
  role: {
    type: String,
    enum: ["categories", "products", "all"],
    required: true,
  },
});

export default couponSchema;
