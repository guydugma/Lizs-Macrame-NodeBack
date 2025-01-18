import { Schema } from "mongoose";
import addressSchema from "./address-schema";
import nameSchema from "./name-schema";

const orderSchema = new Schema({
  name: nameSchema,
  phone: { type: String, required: true },
  email: { type: String, required: true },
  productsId: { type: [String], required: true },
  totalPrice: { type: Number, required: true },
  address: addressSchema,
  userId: { type: String, required: false },
  isDelivery: { type: Boolean, required: true },
  status: {
    type: String,
    Selections: ["ממתין לאישור", "נשלח", "התקבל", "בוטל"],
    default: "ממתין לאישור",
  },
  serial: { type: String },
  createdAt: { type: Date, default: new Date(), required: false },
});

export default orderSchema;
