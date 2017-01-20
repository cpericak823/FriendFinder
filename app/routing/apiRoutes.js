var friendsData = require("../data/friends.js");


//export the app.get and app.post functions to access it in server.js
module.exports = function(app) {
    // Route to api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // Route to create new friend
    app.post("/api/friends", function(req, res) {

        friendsData.push(req.body);
        // console.log("All Friends: " + JSON.stringify(friendsData));
    });
};
