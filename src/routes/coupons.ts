import { Router } from "express";
import { couponService } from "../services/coupon-service";
import { isAdmin } from "../middleware/is-admin";

const router = Router();

router.post("/", ...isAdmin, async (req, res, next) => {
  try {
    const coupon = await couponService.createCoupon(req.body);
    res.json(coupon);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const coupon = await couponService.updateCoupon(req.body, req.params.id);
    res.json(coupon);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const coupons = await couponService.getAllCoupons();
    coupons.map((coupon) => {
      if (new Date(coupon.expirationDate) < new Date()) {
        coupon.isExpired = true;
      }
      return coupon.save();
    });
    res.json(coupons);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const coupon = await couponService.deleteCoupon(req.params.id);
    res.json(coupon);
  } catch (e) {
    next(e);
  }
});

router.get("/:code", async (req, res, next) => {
  try {
    const coupon = await couponService.getCouponByCode(req.params.code);
    if (!coupon.isExpired) {
      if (new Date(coupon.expirationDate) < new Date()) {
        coupon.isExpired = true;
        await coupon.save();
      }
    }
    res.json(coupon);
  } catch (e) {
    next(e);
  }
});

export { router as couponsRouter };
