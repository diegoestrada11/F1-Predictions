import express from "express";
import { buildRaceList, buildRaceDetail } from "../controllers/raceController.js";

const router = express.Router();

// GET /races
router.get("/", buildRaceList);

// GET /races/:id
router.get("/:id", buildRaceDetail);

export default router;