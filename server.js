// ======================
// Imports
// ======================
import "dotenv/config";
import express from "express";
import indexRoutes from "./src/routes/indexRoutes.js";
import raceRoutes from "./src/routes/raceRoutes.js";
import predictionRoutes from "./src/routes/predictionRoutes.js";



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
app.use("/", indexRoutes);
app.use("/races", raceRoutes);
app.use("/predictions", predictionRoutes);

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