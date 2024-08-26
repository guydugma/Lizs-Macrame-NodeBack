import { Logger } from "../logs/logger";
import { usersService } from "../services/users-service";
import  users  from "./initial-data/initial-users";
import  products  from "./initial-data/initial-products";
import  categories  from "./initial-data/initial-categories";
import  stones  from "./initial-data/initial-stones";
import User from "./models/user-model";
import Product from "./models/product-model";
import Category from "./models/category-model";
import Stone from "./models/stone-model";


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
    if (usersCount === 0) {
      for (let u of users) {
        const saved = await usersService.createUser(u);
        Logger.verbose(saved);
      }
    }
    if (productsCount === 0) {
      for (let p of products) {
        try {
          const saved = new Product(p).save();
          Logger.verbose(saved);
        } catch (e) {
          Logger.log(e);
        }
      }
    }
    if (categoriesCount === 0) {
      for (let c of categories) {
        try {
          const saved = new Category(c).save();
          Logger.verbose(saved);
        } catch (e) {
          Logger.log(e);
        }
      }
    }
    if (stonesCount === 0) {
      for (let s of stones) {
        try {
          const saved = new Stone(s).save();
          Logger.verbose(saved);
        }
        catch (e) {
          Logger.log(e);
        }
      }
    }


    return;
    //TODO: card must have a user id
  } catch (e) {
    Logger.log(e);
  }
};

export default initDB;
