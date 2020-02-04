import { Router } from "express";
import { create, read, edit, remove } from "../controllers/product.controller";

const router = Router();

router.post("/", create);
router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", remove);

export default router;
