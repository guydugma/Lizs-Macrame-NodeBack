import mongoose from "mongoose";
import stoneSchema from "../schemas/stone-schema";

const Stone = mongoose.model("Stone", stoneSchema);

export default Stone;