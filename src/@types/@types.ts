export type IName = {
  first: string;
  last: string;
};

export type IAddress = {
  street: string;
  city: string;
  zip?: string;
  country: string;
  houseNumber: number;
};

export type IUserInput = {
  email: string;
  phone: string;
  password: string;
  address: IAddress;
  name: IName;
  isAdmin: boolean;
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
  zodiac: string;
  description: string;
  imageFileName: string;
};

export type IProduct = {
  title: string;
  description: string;
  price: number;
  stock: number;
  imageFileNames: string[];
  stringAColor: string;
  stringBColor: string;
  stone: string;
  category: string;
};

export type ICategory = {
  hebTitle: string;
  engLink: string;
  imageFileNames: string[];
};
