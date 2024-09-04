import { Router } from "express";
import { stonesService } from "../services/stones-service";
import { uploadSingleImage } from "../services/uploadImage-service";
import { Logger } from "../logs/logger";
import multiparty from "multiparty";
import { IStone } from "../@types/@types";
import { isAdmin } from "../middleware/is-admin";

const router = Router();
const upload = uploadSingleImage("stones");

router.post("/", ...isAdmin, upload, async (req, res, next) => {
  try {
    let data = JSON.parse(req.body.stone);
    data.imageFileName = req.file.filename;
    const stone = await stonesService.createStone(data);
    res.json(stone);
  } catch (e) {
    next(e);
  }
});

router.put("/:id", ...isAdmin, upload, async (req, res, next) => {
  try {
    let data = JSON.parse(req.body.stone);
    data.imageFileName = req.file?.filename ?? data.imageFileName;
    console.log(data);
    const stone = await stonesService.updateStone(data, req.params.id);
    res.json(stone);
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const stones = await stonesService.getAllStones();
    res.json(stones);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const stone = await stonesService.getStone(req.params.id);
    res.json(stone);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", ...isAdmin, async (req, res, next) => {
  try {
    const stone = await stonesService.deleteStone(req.params.id);
    res.json(stone);
  } catch (e) {
    next(e);
  }
});

export { router as stonesRouter };
