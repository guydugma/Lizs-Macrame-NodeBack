import { Schema } from "mongoose";

const zodiacSchema = new Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  imageUrl: { type: String, required: true }
});

export default zodiacSchema;