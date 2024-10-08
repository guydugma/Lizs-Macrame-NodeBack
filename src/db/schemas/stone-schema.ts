import { Schema } from "mongoose";
import { IStone } from "../../@types/@types";
import { string } from "joi";

const stoneSchema = new Schema<IStone>({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  zodiac: { type: String, required: true },
  descriptionImageFileName: { type: String },
  imageFileName: { type: String },
});

export default stoneSchema;
