// array to get buttons started
let array = ["Mario", "Luigi", "Link", "Kirby", "Yoshi", "Captain Falcon"];
let userArray = [];
let storedUserInput = [];

function createButton(){
    let newButton = $("<button>");
    newButton.text($("#input").val().trim()).addClass("newButton characterButton btn btn-info").attr("value", $("#input").val().trim()).attr("draggable", "true",).attr("ondragstart", "drag(event)").attr("id", $("#input").val().trim());
    $(".newButtonBar").append(newButton);
}

// create buttons for each item in the array
for (let i = 0; i < array.length; i++) {
    //let button = $("<button>");
    //text(array[i]).attr("id", array[i]).attr("value", array[i]).addClass("characterButton").attr("draggable", "true").attr("ondragstart", "drag(event)");
    $(".buttonBar").append(`
        <button class="characterButton btn btn-info" id="${array[i]}" value="${array[i]}" draggable="true" ondragstart="drag(event)">${array[i]}</button>
    `)
};

// create new button based on user input
$(".submit").on("click", function () {
    event.preventDefault();
    let userInput = $("#input").val().trim().toLowerCase()

    // check array for existing value
    if (!userArray.includes(userInput)) {
        userArray.push(userInput);
        storedUserInput.push(JSON.stringify(userInput))
        localStorage.setItem("User Input", storedUserInput);
        createButton();
    }
    $("#input").val("");
    console.log(userArray);
});

// register value when button is clicked
$(document).on("click", ".characterButton", function () {
    getGifs($(this).val());
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