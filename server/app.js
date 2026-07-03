const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.get("/", (req, res) => {
  res.send("PrepTracker Backend is Running 🚀");
});

app.use("/api/users", userRoutes);

module.exports = app;