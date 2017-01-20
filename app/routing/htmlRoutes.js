var path = require("path");

//export the app.get and app.post functions to access it in server.js
module.exports = function htmlRoutes(app) {
    //route to the home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    //route to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
