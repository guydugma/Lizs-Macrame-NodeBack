import mongoose from "mongoose";
import orderSchema from "../schemas/order-schema";

const Order = mongoose.model("Order", orderSchema);

export default Order;

//schema->model->use the model (OOP usage)
