import { Router } from "express";
import { create } from "../controllers/product.controller";

const router = Router();

router.post("/", create);

export default router;
