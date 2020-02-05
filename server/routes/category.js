import { Router } from "express";
import { create, read, remove } from "../controllers/category";

const router = Router();

router.post("/", create);
router.get("/", read);
router.delete("/:id", remove);

export default router;
