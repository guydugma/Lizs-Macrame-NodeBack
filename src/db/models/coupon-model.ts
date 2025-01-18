import mongoose from "mongoose";
import couponSchema from "../schemas/coupon-schema";

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
