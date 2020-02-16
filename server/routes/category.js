import { Router } from "express";
import { create, read, remove } from "../controllers/category";
import { checkAuth } from "../auth";

const router = Router();

router.post("/", checkAuth, create);
router.get("/", read);
router.delete("/", checkAuth, remove);

export default router;
