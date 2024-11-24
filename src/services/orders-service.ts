import { IOrder } from "../@types/@types";
import Order from "../db/models/order-model";

export const ordersService = {
  createOrder: async (data: IOrder) => {
    data.status = "התקבל";
    return new Order(data).save();
  },

  updateOrder: async (data: IOrder, id: string) =>
    Order.findByIdAndUpdate(id, data, { new: true }),

  getAllOrders: async () => Order.find(),

  getOrder: async (id: string) => Order.findById(id),

  getOrdersByUser: async (userId: string) => Order.find({ userId: userId }),
};
