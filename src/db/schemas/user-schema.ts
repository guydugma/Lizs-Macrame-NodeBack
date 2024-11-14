import { Schema } from "mongoose";
import { IUser } from "../../@types/@types";
import nameSchema from "./name-schema";
import addressSchema from "./address-schema";

const userSchema = new Schema<IUser>({
  name: nameSchema,
  address: addressSchema,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true, minlength: 6 },
  phone: { type: String, required: true, minlength: 9, maxlength: 14 },
  createdAt: { type: Date, default: new Date(), required: false },
  isAdmin: { required: true, type: Boolean, default: false },
});

export default userSchema;
