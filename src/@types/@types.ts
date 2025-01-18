export type IName = {
  first: string;
  last: string;
};

export type ICoupon = {
  code: string;
  discount: number;
  expirationDate: Date;
  minPrice: number;
  isExpired: boolean;
  isPercentage: boolean;
  createdAt: Date;
  categories: string[];
  products: string[];
  role: string;
};

export type IAddress = {
  _id?: string;
  street: string;
  city: string;
  zip?: string;
  country: string;
  houseNumber: number;
};

export type IOrder = {
  _id?: string;
  userId: string;
  name: {
    first: string;
    last: string;
  };
  phone: string;
  email: string;
  productsId: string[];
  totalPrice: number;
  address: {
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: string;
  };
  isDelivery: boolean;
  status: string;
  serial: string;
  createdAt: Date;
};

export type IUserInput = {
  email: string;
  phone: string;
  password: string;
  address: IAddress;
  name: IName;
  isAdmin: boolean;
  couponsUsed: string[];
};

export type IUser = IUserInput & {
  createdAt: Date;
  isAdmin: boolean;
};

export type ILogin = {
  email: string;
  password: string;
};

export type IJWTPayload = {
  _id: string;
  isAdmin: boolean;
};

export type IZodiac = {
  name: string;
};

export type IStone = {
  name: string;
  zodiacs: string[];
  descriptionText: string;
  imageFileName: string;
};

export type IProduct = {
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  discount: number;
  stock: number;
  imageFileNames: string[];
  stringAColor: string;
  stringBColor: string;
  stone: string;
  category: string;
  positionIndex: number;
};

export type ICategory = {
  hebTitle: string;
  engLink: string;
  imageFileNames: string[];
};

export type IPayProtocolParams = {
  action: string;
  Masof: string;
  What: string;
  PassP: string;
  KEY: string;
  Id: string;
  Amount: string;
  Currency: string;
  CCode: string;
  OrderId: string;
  ACode: string;
  Order: string;
  Fild1: string;
  Fild2: string;
  Fild3: string;
  Sign: string;
  Payments: string;
  UserId: string;
  Brand: string;
  Issuer: string;
  L4digit: string;
  street: string;
  city: string;
  zip: string;
  country: string;
  cell: string;
  Coin: string;
  Tmonth: string;
  Tyear: string;
  errMsg: string;
  Hesh: string;
};
