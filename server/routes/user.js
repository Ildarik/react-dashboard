import { Router } from "express";
import { register, login } from "../controllers/user";

const router = Router();

router.post("/login", login);
router.post("/", register);

export default router;
