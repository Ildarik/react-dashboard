import { Router } from "express";
import { create, read, remove } from "../controllers/category.controller";

const router = Router();

router.post("/", create);
router.get("/:id", read);
router.delete("/:id", remove);

export default router;
