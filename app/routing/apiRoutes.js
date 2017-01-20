var path = require("path");
var friends = require("../data/friends.js");


//export the app.get and app.post functions to access it in server.js
module.exports = function apiRoutes(app) {
    // Route to api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // Route to create new friend
    app.post("/api/friends", function(req, res) {
        var newFriends = req.body;
        console.log(newFriend);
        friends.push(newFriends);
        console.log("All Friends: " + JSON.stringify(friends));
    });
};
