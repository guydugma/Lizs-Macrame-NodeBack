import { string } from "joi";
import { Schema } from "mongoose";


const categorySchema = new Schema({
  hebTitle: { type: String, required: true, minlength: 2, maxlength: 256 },
  engLink: { type: String, required: true, minlength: 2, maxlength: 256 },
  imageFileNames: { type: [String], required: true, minlength: 14, maxlength: 256 },
});

export default categorySchema;