import { Router } from "express";
import { create, read, edit, remove } from "../controllers/product";
import { checkAuth } from "../auth";

const router = Router();

router.post("/", checkAuth, create);
router.get("/", read);
router.put("/", checkAuth, edit);
router.delete("/", checkAuth, remove);

export default router;
