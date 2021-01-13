//import express, { urlencoded, json, static } from "express";
const express = require("express");
// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3306;

// Requiring our models for syncing
const db = require("./app/models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// require("./app/routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
