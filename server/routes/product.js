import { Router } from "express";
import { create, read, edit, remove } from "../controllers/product";

const router = Router();

router.post("/", create);
router.get("/", read);
router.put("/:id", edit);
router.delete("/:id", remove);

export default router;
