//link to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});


//link to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
