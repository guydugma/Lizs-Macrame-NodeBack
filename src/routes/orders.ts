import { Router } from "express";
import { ordersService } from "../services/orders-service";
import { Logger } from "../logs/logger";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const order = await ordersService.createOrder(req.body);
    res.json(order);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const order = await ordersService.getOrder(req.params.id);
    res.json(order);
  } catch (e) {
    next(e);
  }
});

router.get("/user/:id", async (req, res, next) => {
  try {
    const orders = await ordersService.getOrdersByUser(req.params.id);
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const order = await ordersService.updateOrder(req.body, req.params.id);
    res.json(order);
  } catch (e) {
    next(e);
  }
});

export { router as ordersRouter };
