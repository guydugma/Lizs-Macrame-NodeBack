import { Router } from "express";
import { categoriesService } from "../services/categories-service";
import { isAdmin } from "../middleware/is-admin";

const router = Router();

router.post("/", ...isAdmin, async (req, res, next) => {
  try {
    const category = await categoriesService.createCategory(req.body);
    res.json(category);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const category = await categoriesService.updateCategory(
      req.body,
      req.params.id
    );
    res.json(category);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const categories = await categoriesService.getAllCategories();
    res.json(categories);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const category = await categoriesService.deleteCategory(req.params.id);
    res.json(category);
  } catch (e) {
    next(e);
  }
});

export { router as categoriesRouter };
