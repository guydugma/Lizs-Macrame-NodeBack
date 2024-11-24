import { Schema } from "mongoose";
import addressSchema from "./address-schema";

const orderSchema = new Schema({
  userId: { type: String, required: true },
  productsId: { type: [String], required: true },
  totalPrice: { type: Number, required: true },
  address: addressSchema,
  isDelivery: { type: Boolean, required: true },
  status: {
    type: String,
    Selections: ["ממתין לאישור", "נשלח", "התקבל", "בוטל"],
    default: "pending",
  },
});

export default orderSchema;
