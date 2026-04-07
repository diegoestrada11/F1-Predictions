import express from "express";
import { buildHome } from "../controllers/indexController.js";

const router = express.Router();

router.get("/", buildHome);

export default router;   // 🔥 REQUIRED