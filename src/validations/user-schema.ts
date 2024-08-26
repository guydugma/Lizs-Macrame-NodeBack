import Joi from "joi";
import { passwordRegex, phoneRegex } from "./patterns";
import { IAddress, IName, IUser } from "../@types/@types";
import { isAdmin } from "../middleware/is-admin";

const addressSchema = Joi.object<IAddress>({
  city: Joi.string().min(2).max(50).required(),
  country: Joi.string().min(2).max(50).required(),
  houseNumber: Joi.number(),
  street: Joi.string().min(2).max(50).required(),
  zip: Joi.string().min(2).max(10).required(),
});

const userSchema = Joi.object<IUser>({
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  password: Joi.string().pattern(passwordRegex).required(),
  //address
  address: addressSchema.required(),
  name: Joi.object<IName>({
    first: Joi.string().min(2).max(50).required(),
    last: Joi.string().min(2).max(50).required(),
  }).required(),
  isAdmin: Joi.boolean().default(false).required(),
});

export default userSchema;

export { addressSchema, userSchema };
