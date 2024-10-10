// routers/router.js

const express = require("express");
const path = require("path");
const { login } = require("../controllers/authController");

const routes = express.Router();

// Serve index.html at the /login route
routes.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/index.html'));
});

// Serve the dashboard page after successful login
routes.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, '../pages/dashboard.html'));
});

// Login route
routes.post("/login", login);

module.exports = routes;
