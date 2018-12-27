// array to get buttons started
let array = ["Mario", "Luigi", "Link", "Kirby", "Yoshi", "Captain Falcon"];
let userArray = [];

// create buttons for each item in the array
for (let i = 0; i < array.length; i++) {
    let button = $("<button>");
    button.text(array[i]).attr("id", array[i]).attr("value", array[i]).addClass("characterButton");
    $(".buttonBar").append(button)
}

// create new button based on user input
$(".submit").on("click", function () {
    event.preventDefault();
    let newButton = $("<button>");

    // check array for existing value
    if (userArray.includes($("#input").val().trim().toLowerCase())) {
        console.log("already here, bruh!")
    } else {
        userArray.push($("#input").val().trim().toLowerCase());
        newButton.text($("#input").val().trim()).addClass("newButton characterButton").attr("value", $("#input").val().trim());
        $(".newButtonBar").append(newButton);
    }
    $("#input").val("");
    console.log(userArray);
})

// register value when button is clicked
$(document).on("click", ".characterButton", function () {
    getGifs($(this).val());
});

// change src from still to animated src on click event
$(document).on("click", "img", function () {
    let state = $(this)[0].classList[0]
    if (state === "still") {
        $(this).removeClass("still").addClass("animated").attr("src", $(this).attr("animated"));
    } else {
        $(this).removeClass("animated").addClass("still").attr("src", $(this).attr("still"))
    }

});