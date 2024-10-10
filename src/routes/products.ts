import { Router } from "express";
import { productsService } from "../services/products-service";
import { uploadMultipleImages } from "../services/uploadImage-service";
import { categoriesService } from "../services/categories-service";
import { isAdmin } from "../middleware/is-admin";
import { Logger } from "../logs/logger";

const router = Router();
const upload = uploadMultipleImages("products");

router.post("/", ...isAdmin, upload, async (req, res, next) => {
  try {
    let data = JSON.parse(req.body.product);
    data.imageFileNames = Array.prototype.map.call(
      req.files,
      (f: any) => f.filename
    );
    const product = await productsService.createProduct(data);
    let category = await categoriesService.getCategoryByHebTitle(data.category);
    if (category.imageFileNames[0] === "") {
      category.imageFileNames = [...data.imageFileNames];
    } else {
      category.imageFileNames = [
        ...category.imageFileNames,
        ...data.imageFileNames,
      ];
    }
    categoriesService.updateCategory(category, category._id.toString());
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", ...isAdmin, upload, async (req, res, next) => {
  try {
    let data = JSON.parse(req.body.product);
    data.imageFileNames = [
      ...data.imageFileNames,
      ...Array.prototype.map.call(req.files, (f: any) => f.filename),
    ];
    const product = await productsService.updateProduct(data, req.params.id);
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    res.json(products);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await productsService.getProduct(req.params.id);
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.get("/:category", async (req, res, next) => {
  try {
    const products = await productsService.getProductsByCategory(
      req.params.category
    );
    res.json(products);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const product = await productsService.deleteProduct(req.params.id);
    res.json(product);
  } catch (e) {
    next(e);
  }
});

export { router as productsRouter };
