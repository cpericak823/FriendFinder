//Global Variables and Node Packages
var PORT = process.env.PORT || 3000;
var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//Listen to the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
