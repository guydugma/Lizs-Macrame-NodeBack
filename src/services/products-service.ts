import { IProduct } from "../@types/@types";
import Product from "../db/models/product-model";


export const productsService = {

  createProduct: async (data: IProduct) =>new Product(data).save(),

  updateProduct: async (data, productId) => Product.findByIdAndUpdate(productId, data, { new: true }),
  
  getProductsByCategory: async (category: string) => Product.find({category: category}),

  getProduct: async (productId: string) =>  await Product.findById(productId)
   ,
  
  getAllProducts: async () => Product.find(),

  deleteProduct: async (productId: string) => Product.findByIdAndDelete(productId),

}
