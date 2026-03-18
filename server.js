// Imports
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("F1 Prediction App Running");
});

// Define the port number the server will listen on
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});