import express from "express";
import { buildLeaderboard } from "../../controllers/leaderboard/leaderboardController.js";

const router = express.Router();

router.get("/", buildLeaderboard);

export default router;