import { ICategory } from "../@types/@types";
import Category from "../db/models/category-model";

export const categoriesService = {
  createCategory: async (data: ICategory) => new Category(data).save(),

  updateCategory: async (data: ICategory, id: string) =>
    Category.findByIdAndUpdate(id, data, { new: true }),

  getAllCategories: async () => Category.find(),

  getCategoryByHebTitle: async (hebTitle: string) =>
    Category.findOne({ hebTitle: hebTitle }),

  deleteCategory: async (id: string) => Category.findByIdAndDelete(id),
};
