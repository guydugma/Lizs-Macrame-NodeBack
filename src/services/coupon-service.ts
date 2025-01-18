import { ICoupon } from "../@types/@types";
import Coupon from "../db/models/coupon-model";

export const couponService = {
  createCoupon: async (data: ICoupon) => new Coupon(data).save(),

  updateCoupon: async (data: ICoupon, id: string) =>
    Coupon.findByIdAndUpdate(id, data, { new: true }),

  getAllCoupons: async () => Coupon.find(),

  deleteCoupon: async (id: string) => Coupon.findByIdAndDelete(id),

  getCouponByCode: async (code: string) => Coupon.findOne({ code: code }),
};
