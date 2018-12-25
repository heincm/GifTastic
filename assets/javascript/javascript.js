// array to get buttons started
let array = ["Mario", "Luigi", "Link", "Kirby", "Yoshi", "Captain Falcon"];
let userArray = [];

// create buttons for each item in the array
for (let i = 0; i < array.length; i++) {
    let button = $("<button>");
    button.text(array[i]).attr("id", array[i]).attr("value", array[i]).addClass("characterButton");
    $(".buttonBar").append(button)
}

// register value when button is clicked
/*$(".characterButton").on("click", function () {
    console.log($(this).val());
    // return $(this).val();
    getGifs($(this).val());
})*/

// create new button based on user input
$(".submit").on("click", function () {
    event.preventDefault();
    let newButton = $("<button>");
    newButton.text($("#input").val()).addClass("newButton characterButton").attr("value", $("#input").val());
    $(".newButtonBar").append(newButton);

    // check array for existing value
    //if (("#input").val() === )

    // push new items to userarray
    userArray.push($("#input").val());
    console.log(userArray);

    $("#input").val("");
})

// register value when button is clicked
$(document).on("click", ".characterButton", function () {
    getGifs($(this).val());
});