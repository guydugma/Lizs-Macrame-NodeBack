import { Schema } from "mongoose";
import { IAddress } from "../../@types/@types";

const addressSchema = new Schema<IAddress>({
  country: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  zip: { type: String, required: true },
  houseNumber: { type: Number, required: true },
});

export default addressSchema;
