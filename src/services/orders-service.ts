import {
  ApiError,
  CheckoutPaymentIntent,
  Client,
  Environment,
  LogLevel,
  OrdersController,
  PaymentsController,
} from "@paypal/paypal-server-sdk";
import { IOrder } from "../@types/@types";
import Order from "../db/models/order-model";
import { string } from "joi";
import { payment } from "./payment-service";

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PORT = 8080 } = process.env;

const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: PAYPAL_CLIENT_ID,
    oAuthClientSecret: PAYPAL_CLIENT_SECRET,
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: { logBody: true },
    logResponse: { logHeaders: true },
  },
});
const ordersController = new OrdersController(client);
const paymentsController = new PaymentsController(client);

export const ordersService = {
  createOrder: async (data: IOrder) => {
    data.serial = (await Order.countDocuments()).toString();
    return new Order(data).save();
  },

  getPaymentLink: async (data: IOrder) => payment(data),

  updateOrder: async (data: IOrder, id: string) =>
    Order.findByIdAndUpdate(id, data, { new: true }),

  getAllOrders: async () => Order.find(),

  getOrder: async (id: string) => Order.findById(id),

  getOrdersByUser: async (userId: string) => Order.find({ userId: userId }),

  createPayPalOrder: async (data: IOrder) => {
    const collect = {
      body: {
        intent: CheckoutPaymentIntent.Capture,
        purchaseUnits: [
          {
            amount: {
              currencyCode: "ILS",
              value: `${data.totalPrice}`,
            },
          },
        ],
        shipping: {
          options: [
            {
              id: "001",
              type: "SHIPPING",
              label: "איסוף עצמי",
              selected: true,
              amount: {
                currencyCode: "ILS",
                value: "0",
              },
            },
            {
              id: "002",
              type: "SHIPPING",
              label: "משלוח",
              selected: false,
              amount: {
                currencyCode: "ILS",
                value: "35",
              },
            },
          ],
        },
      },
      prefer: "return=minimal",
    };
    try {
      const { body, ...httpResponse } = await ordersController.ordersCreate(
        collect
      );
      // Get more response info...
      // const { statusCode, headers } = httpResponse;
      return {
        jsonResponse: JSON.parse(body.toString()),
        httpStatusCode: httpResponse.statusCode,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        // const { statusCode, headers } = error;
        throw new Error(error.message);
      }
    }
  },
};
