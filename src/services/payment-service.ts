import axios, { AxiosHeaders } from "axios";
import { IOrder, IPayProtocolParams, IProduct } from "../@types/@types";
import Product from "../db/models/product-model";
import Order from "../db/models/order-model";
import e from "express";
import { Logger } from "../logs/logger";

const url = "https://icom.yaad.net/p/";

const getParams = async (order: IOrder) => {
  let description = "הזמנה של ";
  const products = await Product.find({ _id: { $in: order.productsId } });
  const productsNames = products.map((product) => product.title);
  if (productsNames.length === 1) {
    description += `${productsNames[0]}.`;
  } else if (productsNames.length === 2) {
    description += `${productsNames[0]} ו${productsNames[1]}.`;
  } else {
    productsNames.forEach((name, index) => {
      description +=
        index !== productsNames.length - 1 ? `${name}, ` : `ו${name}.`;
    });
  }
  return {
    action: "APISign",
    Masof: "4501850632",
    What: "SIGN",
    KEY: "432cee131835e0372b4fbdae960bbe69178fb8e7",
    Info: description,
    Amount: `${order.totalPrice}`,
    UTF8: "True",
    UTF8out: "True",
    PassP: "yaad",
    ClientName: `${order.name.first}`,
    ClientLName: `${order.name.last}`,
    street: `${order.address.street}`,
    city: `${order.address.city}`,
    zip: `${order.address.zip}`,
    phone: `${order.phone}`,
    email: `${order.email}`,
    Order: `${order._id}`,
    Tash: "1",
    sendemail: "True",
    Coin: "1",
    tmp: "1",
    PageLang: "HEB",
  };
};

export const payment = async (order: IOrder) => {
  order.status = "התקבל";
  order.serial = (await Order.countDocuments()).toString();
  order.createdAt = new Date();

  if (!Order.findOne(order)) {
    return await Order.create(order).then(async (newOrder) => {
      const params = getParams(newOrder[0]);
      return axios
        .get(url, {
          params: params,
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));
    });
  } else {
    const params = await getParams(order);
    return axios
      .get(url, {
        params: params,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err };
      });
  }
};

export const verifyPayment = async (params: IPayProtocolParams) => {
  params.action = "APISign";
  params.KEY = "432cee131835e0372b4fbdae960bbe69178fb8e7";
  params.What = "VERIFY";
  params.PassP = "yaad";
  params.Masof = "4501850632";
  return axios
    .get(url, {
      params: params,
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      Logger.log(res.data);
      if (res.data.includes("CCode=200")) {
        Order.findByIdAndUpdate(params.Order, { status: "התקבל" });
      }
      let codeString: string = res.data.split("CCode=")[1];
      codeString = codeString.trimEnd();
      return codeString;
    })
    .catch((err) => {
      return { error: err };
    });
};
