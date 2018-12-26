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
    newButton.text($("#input").val().trim()).addClass("newButton characterButton").attr("value", $("#input").val().trim());
    $(".newButtonBar").append(newButton);

    // check array for existing value
    //if (("#input").val() === )

    // push new items to userarray
    userArray.push($("#input").val().trim());
    $("#input").val("");
})

// register value when button is clicked
$(document).on("click", ".characterButton", function () {
    getGifs($(this).val());
});

$(document).on("click", "img", function () {
    let state = $(this)[0].classList[0]
    if (state === "still") {
        $(this).removeClass("still");
        $(this).addClass("animated");
        $(this).attr("src", $(this).attr("animated"))
    } else {
        $(this).removeClass("animated");
        $(this).addClass("still");
        $(this).attr("src", $(this).attr("still"))
    }
    
});