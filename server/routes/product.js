import { Router } from "express";
import { create, read, edit, remove } from "../controllers/product";

const router = Router();

router.post("/", create);
router.get("/", read);
router.put("/", edit);
router.delete("/", remove);

export default router;
