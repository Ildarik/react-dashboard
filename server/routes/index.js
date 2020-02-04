import { Router } from "express";
import test from "../controllers/product.controller";

const router = Router();

router.get("/test", test);

export default router;
