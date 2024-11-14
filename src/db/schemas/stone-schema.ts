import { Schema } from "mongoose";
import { IStone } from "../../@types/@types";
import { required, string } from "joi";

const stoneSchema = new Schema<IStone>({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  zodiacs: { type: [String] },
  descriptionText: { type: String },
  imageFileName: { type: String },
});

export default stoneSchema;
