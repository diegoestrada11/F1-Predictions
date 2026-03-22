// ======================
// Imports
// ======================
import "dotenv/config";
import express from "express";
import indexRoutes from "./src/routes/indexRoutes.js";


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


// ======================
// Start the server
// ======================
app.listen(PORT, () => {
  console.log(`F1-Predictions running at http://localhost:${PORT}`);
});