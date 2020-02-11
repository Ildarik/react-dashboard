import { Router } from "express";
import { create, read, edit, remove } from "../controllers/product";

const router = Router();

router.post("/", create);
router.get("/", read);
router.put("/", edit);
router.delete(
  "/",
  (req, res, next) => {
    console.log(req.session.username);
    next();
  },
  remove
);

export default router;
