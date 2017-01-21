var friendsData = require("../data/friends.js");


//export the app.get and app.post functions to access it in server.js
module.exports = function(app) {
    // Route to api/friends
    app.get("/api/friends", function(req, res) {

        //return the friends data as a json object
        res.json(friendsData);
    });

    // Route to create new friend
    app.post("/api/friends", function(req, res) {

        //push the new data to the friends data array
        friendsData.push(req.body);
        res.send("");

    });
};
