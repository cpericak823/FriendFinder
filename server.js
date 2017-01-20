//require express, body-parser, and path packages
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

//create the express server
var app = express();

//Set the port equal to the environment port or 3000
var PORT = process.env.PORT || 3000;

//use body-parser middleware to format the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require the html and api route files
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


//Listen to the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
