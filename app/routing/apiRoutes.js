var friends = [];

// Route to api/tables
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// Route to create reservation
app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var listType;
    console.log(newFriend);
    if ("") {
        listType = "friends list";
        friends.push(newFriend);
    }
    console.log("All Friends: " + JSON.stringify(friends));

    res.send(listType);
});
