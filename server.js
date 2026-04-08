// ======================
// Imports
// ======================
import "dotenv/config";
import express from "express";
import session from "express-session";
import indexRoutes from "./src/routes/indexRoutes.js";
import raceRoutes from "./src/routes/races/raceRoutes.js";
import predictionRoutes from "./src/routes/predictions/predictionRoutes.js";
import authRoutes from "./src/routes/auth/authRoutes.js";
import leaderboardRoutes from "./src/routes/leaderboard/leaderboardRoutes.js";

// ======================
// Declare Important Variables
// ======================
const PORT = process.env.PORT || 3000;

// ======================
// Setup Express Server
// ======================
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static("public"));

// EJS setup
app.set("view engine", "ejs");
app.set("views", "./src/views");


// ======================
// Declare Routes
// ======================
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});
app.use("/", authRoutes);
app.use("/", indexRoutes);
app.use("/races", raceRoutes);
app.use("/predictions", predictionRoutes);
app.use("/leaderboard", leaderboardRoutes);

// 404 handler 
app.use((req, res) => {
  res.status(404).render("404");
});

// ======================
// Start the server
// ======================
app.listen(PORT, () => {
  console.log(`F1-Predictions running at http://localhost:${PORT}`);
});