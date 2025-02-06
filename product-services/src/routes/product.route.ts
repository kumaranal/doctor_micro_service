import express from "express";
import { registerUser } from "../controllers/product.controller";

const router = express.Router();

router.get("/register2", registerUser);

export default router;
