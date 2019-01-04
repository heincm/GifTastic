// array to get buttons started
let array = ["Mario", "Luigi", "Link", "Kirby", "Yoshi", "Captain Falcon", "Princess Peach", "Toad", "Bowser"];
let userArray = [];
let storedUserInput = [];

//console.log(JSON.parse(localStorage.getItem("User Input")));

function createButton() {
    let inputValue = $("#input").val().trim()
    let newButton = $("<button>");
    newButton.text(inputValue).addClass("newButton characterButton btn btn-info")
        .attr("value", inputValue).attr("id", inputValue);

    // Removed draggable event for the time being .attr("draggable", "true").attr("ondragstart", "drag(event)")

    $(".newButtonBar").append(newButton)//.append(`<input type="checkbox" value="${inputValue}" class="checkbox"/>`);
}

// create buttons for each item in the array
for (let i = 0; i < array.length; i++) {
    $(".buttonBar").append(`
        <button class="characterButton btn btn-info" id="${array[i]}" value="${array[i]}">${array[i]}</button>
        `)
};

// create new button based on user input
$(".submit").on("click", function () {
    event.preventDefault();
    let userInput = $("#input").val().trim().toLowerCase()

    // check array for existing value
    if (!userArray.includes(userInput)) {
        userArray.push(userInput);
        createButton();
    }
    $("#input").val("");
});

// register value when button is clicked
$(document).on("click", ".characterButton", function () {
    getGifs($(this).val(), 10);
});

// change src from still to animated src on click event
$(document).on("click", "img", function () {
    let state = $(this).attr("data-state")
    if (state === "still") {
        $(this).attr("data-state", "animated").attr("src", $(this).attr("animated"));
    } else {
        $(this).attr("data-state", "still").attr("src", $(this).attr("still"));
    }
});

// add favorite gifs to favorites section and store in local storage
$(document).on("click", ".favButton", function () {
    event.preventDefault();
    //if (!JSON.parse(storedUserInput).includes($(this).val())) {

        let newDiv = $("<div>");
        let img = $("<img>")
        newDiv.addClass("gifDiv mb-1")
        img.attr("src", ($(this).val()))
        $(".favoriteGifs").append(newDiv)
        newDiv.append(img)

        storedUserInput.push(JSON.stringify($(this).val()));
        localStorage.setItem("User Input", JSON.stringify(storedUserInput));
    //}
});

/* Removed draggable event for now as unable to figure out data transfer. Will attempt later.

// testing out draggable items
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
*/