//import express, { urlencoded, json, static } from "express";
const express = require("express");
const session = require("express-session");
const exphbs = require('express-handlebars'); 
const passport = require("./app/config/passport.js")
const path = require("path");

// Sets up the Express App
const app = require('express')();
const PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));

// const htmlRoutes = require("./app/routes/html");

// Requiring our models for syncing
const db = require("./app/models");
const seed = require("./seeders/seed.js");
const majors = require("./app/models/majors.js");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
// // express.static(root, [options])
// app.use('/static', express.static(path.join(__dirname, 'app/public')))
// app.use("/", htmlRoutes);
// const db = require("./app/models");

var mysql = require("mysql");
var connection ;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection ({
//     host: "localhost",
//     user: "root",
//     password: process.env.DB_PASSWORD,
//     database: "sequelize_program_library"
//   })
// }

// Routes
require("./app/routes/html.js")(app);
require("./app/routes/html-routes-login")(app);
require("./app/routes/api-routes-login")(app);
require("./app/routes/api-routes")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then(() => {
    console.log("Tables created in database.");
    db.Major.bulkCreate(seed.majors).then(() => {
      db.Business_Course.bulkCreate(seed.businessCourses);
    }).then(() => {
      db.User.bulkCreate(seed.userDemo).then(() => {
        console.log("Seed data synced with database.");
        app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
      });
    });
});
 