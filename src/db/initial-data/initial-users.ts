import { IUser } from "../../@types/@types";

const users = [
  {
    isAdmin: false,
    name: {
      first: "Regular",
      last: "User",
    },
    phone: "0507123012",
    email: "reg@gmail.com",
    password: "Abc!123Abc",
    address: {
      country: "Israel",
      city: "Tel aviv",
      street: "Shoham",
      houseNumber: 5,
      zip: "8920435",
    },
  },
  {
    isAdmin: false,
    name: {
      first: "Business",
      last: "User",
    },
    phone: "050-8123012",
    email: "business@gmail.com",
    password: "Abc!123Abc",
    address: {
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
  },
  {
    isAdmin: true,
    name: {
      first: "Admin",
      last: "User",
    },
    phone: "050-8123012",
    email: "admin@gmail.com",
    password: "Abc!123Abc",
    address: {
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
  },
];

export default users;
