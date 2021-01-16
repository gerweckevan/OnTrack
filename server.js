//import express, { urlencoded, json, static } from "express";
const express = require("express");
const path = require("path");
// Sets up the Express App
const app = require('express')();
const PORT = process.env.PORT || 8080;

// const publicPath = path.resolve(__dirname, "public");
app.use(express.static("app/public"));
// app.use(express.static(path.join(__dirname, '/public')));


// const htmlRoutes = require("./app/routes/html");
// Requiring our models for syncing

const exphbs = require('express-handlebars'); 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
// // express.static(root, [options])
// app.use('/static', express.static(path.join(__dirname, 'app/public')))
// app.use("/", htmlRoutes);
// const db = require("./app/models");
// Routes
require("./app/routes/html.js")(app);
// Syncing our sequelize models and then starting our Express app
// db.sequelize.sync({force: true}).then(() => {
 
// });
 app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));