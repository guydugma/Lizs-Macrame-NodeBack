import { Schema } from "mongoose";
import stoneSchema from "./stone-schema";
import categorySchema from "./category-schema";

const productSchema = new Schema({
  title: { type: String, required: true, minlength: 2, maxlength: 256 },
  description: { type: String, required: true, minlength: 2, maxlength: 1024 },
  originalPrice: { type: Number, required: true, min: 0 },
  currentPrice: { type: Number, required: true, min: 0 },
  discount: { type: Number, required: true, min: 0, max: 100, default: 0 },
  imageFileNames: {
    type: [String],
    required: true,
    minlength: 14,
    maxlength: 256,
  },
  stock: { type: Number, required: true, min: 0 },
  stringAColor: { type: String, required: true, minlength: 2, maxlength: 256 },
  stringBColor: { type: String, minlength: 2, maxlength: 256 },
  stone: { type: String, required: true },
  category: { type: String, required: true },
});

export default productSchema;
