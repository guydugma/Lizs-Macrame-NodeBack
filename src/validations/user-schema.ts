import Joi from "joi";
import { passwordRegex, phoneRegex } from "./patterns";
import { IAddress, IName, IUser } from "../@types/@types";

const addressSchema = Joi.object<IAddress>({
  city: Joi.string().required(),
  country: Joi.string().required(),
  houseNumber: Joi.number(),
  street: Joi.string().required(),
  zip: Joi.string().required(),
});

const userSchema = Joi.object<IUser>({
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(phoneRegex).required(),
  password: Joi.string().pattern(passwordRegex).required(),
  //address
  address: addressSchema.required(),
  name: Joi.object<IName>({
    first: Joi.string().required(),
    last: Joi.string().required(),
  }).required(),
  isAdmin: Joi.boolean().default(false).required(),
});

export default userSchema;

export { addressSchema, userSchema };
