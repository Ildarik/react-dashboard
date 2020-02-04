import { Router } from "express";
import { create, read } from "../controllers/product.controller";

const router = Router();

router.post("/", create);
router.get("/:id", read);

export default router;
