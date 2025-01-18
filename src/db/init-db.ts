import { Logger } from "../logs/logger";
import { usersService } from "../services/users-service";
import User from "./models/user-model";
import Product from "./models/product-model";
import Category from "./models/category-model";
import Stone from "./models/stone-model";
import Order from "./models/order-model";
import { ICategory } from "../@types/@types";
import fs from "fs";

const initDB = async () => {
  try {
    const usersCount = await User.countDocuments();
    Logger.log(`users: ${usersCount}`);
    const productsCount = await Product.countDocuments();
    Logger.log(`products: ${productsCount}`);
    const categoriesCount = await Category.countDocuments();
    Logger.log(`categories: ${categoriesCount}`);
    const stonesCount = await Stone.countDocuments();
    Logger.log(`stones: ${stonesCount}`);
    // if (usersCount === 0) {
    //   for (let u of users) {
    //     const saved = await usersService.createUser(u);
    //     Logger.verbose(saved);
    //   }
    // }
    // if (productsCount === 0) {
    //   for (let p of products) {
    //     try {
    //       const saved = new Product(p).save();
    //       Logger.verbose(saved);
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   }
    // }
    // if (categoriesCount === 0) {
    //   for (let c of categories) {
    //     try {
    //       const saved = new Category(c).save();
    //       Logger.verbose(saved);
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   }
    // }
    // if (stonesCount === 0) {
    //   for (let s of stones) {
    //     try {
    //       const saved = new Stone(s).save();
    //       Logger.verbose(saved);
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   }
    // }

    // Product.find().then((products) => {
    //   products.forEach((p) => {
    //     try {
    //       p.OriginalPrice &&
    //         ((p.originalPrice = p.OriginalPrice),
    //         (p.currentPrice =
    //           p.OriginalPrice - p.OriginalPrice * (p.discount / 100)),
    //         (p.OriginalPrice = undefined));
    //       console.log(p.originalPrice);
    //       p.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Stone.find().then((stones) => {
    //   stones.forEach((s) => {
    //     try {
    //       s.descriptionText = "";
    //       s.imageFileName = undefined;
    //       console.log(s.descriptionText);
    //       s.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Stone.find().then((stones) => {
    //   stones.forEach((s) => {
    //     try {
    //       s.zodiacs = [];
    //       s.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Product.find().then((products) => {
    //   let index = 0;
    //   products.forEach((p) => {
    //     try {
    //       p.positionIndex = index++;
    //       p.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Order.find().then((orders) => {
    //   orders.forEach((o) => {
    //     try {
    //       o.status = "התקבל";
    //       o.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Order.find().then((orders) => {
    //   orders.forEach((o, index) => {
    //     try {
    //       o.createdAt = new Date();
    //       o.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Category.find().then((categories) => {
    //   categories.forEach((c) => {
    //     try {
    //       let copy = [...c.imageFileNames];
    //       c.imageFileNames.forEach((f, index) => {
    //         if (!fs.existsSync("public/products/" + f)) {
    //           copy = copy.filter((f1, index1) => f1 !== f);
    //           console.log(f + " does not exist");
    //         }
    //       });
    //       c.imageFileNames = copy;
    //       c.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    // Product.find().then((products) => {
    //   let imageList = [];
    //   products.forEach((p) => {
    //     imageList = [...imageList, ...p.imageFileNames];
    //   });
    //   Logger.log(imageList);
    //   const files = fs.readdirSync("public/products");
    //   files.forEach((f) => {
    //     if (!imageList.includes(f)) {
    //       fs.unlinkSync("public/products/" + f);
    //     }
    //   });
    // });

    // User.find().then((users) => {
    //   users.forEach((u) => {
    //     try {
    //       if (!u.couponsUsed) {
    //         u.couponsUsed = [];
    //       }
    //       u.save();
    //     } catch (e) {
    //       Logger.log(e);
    //     }
    //   });
    // });

    return;
    //TODO: card must have a user id
  } catch (e) {
    Logger.log(e);
  }
};

export default initDB;
