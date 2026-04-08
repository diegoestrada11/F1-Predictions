import { getLeaderboard } from "../../models/leaderboard/leaderboardModel.js";

export const buildLeaderboard = async (req, res) => {
  const leaderboard = await getLeaderboard();

  res.render("leaderboard/leaderboard", { leaderboard });
};