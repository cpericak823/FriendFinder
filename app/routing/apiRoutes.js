var friends = require("../data/friends.js");


//export the app.get and app.post functions to access it in server.js
module.exports = function(app) {
    // Route to api/friends
    app.get("/api/friends", function(req, res) {

        //return the friends data as a json object
        res.json(friends);
    });

    // Route to create new friend
    app.post("/api/friends", function(req, res) {

        //call the matchFriends function with the old friend and new friend arguments and set equal to a new variable 
        var matchedFriendInfo = matchFriends(friends, req.body);

        //push the new data to the friends data array
        friends.push(req.body);

        //which will be returned as a json object which will be called in the modal
        res.json(matchedFriendInfo);
    });
};

//function definition of matchFriends to find the difference between the answers to the questions for the new friend and old friends
function matchFriends(friends, newFriend) {
    var closestDifference;
    var matchedFriend;

    //loop through the old friends array
    for (var i = 0; i < friends.length; i++) {

        //define a new varible equal to one friend at any index
        var friend = friends[i];

        //set the difference equal to 0 to start
        var difference = 0;



        //loop through the length of the scores in the new friend array
        for (var j = 0; j < newFriend.scores.length; j++) {

            //set the index of each score for the newFriend equal to a new variable
            var answerA = newFriend.scores[j];

            //call that same variable since the indexes will be the same for the friend variable
            var answerB = friend.scores[j];

            //redefine the difference variable equal to the total sum of each absolute value difference between each difference
            difference = difference + (Math.abs(answerA - answerB));

        }
        if (difference < closestDifference || closestDifference === undefined) {
            closestDifference = difference;
            matchedFriend = friend;
        }
    }
    return {
        name: matchedFriend.name,
        photo: matchedFriend.photo
    };
}
