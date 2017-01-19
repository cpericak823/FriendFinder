//On click event for the submit button that pushes survey data to the friends array
$("#submit").on("click", function(event) {

    //gather the values of each dropdown and push to an array
    var scores = [];
    $(".selectpicker :selected").each(function(i, selected) {
        scores[i] = $(selected).text();
    });

    event.preventDefault();

    //collect the survey data and remove any unnecessary white space
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: scores
    };

    //post the newly added data
    $.post("/api/friends", newFriend)
        .done(function(data) {
            console.log(data);
        });

    //jquery to load modal when clicking submit on the the survey page
    $("#friendModal").modal("toggle");

});

//calculate comparison of scores between user and friends api list
