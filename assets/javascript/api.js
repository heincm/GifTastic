function getGifs(characterClick) {

let character = characterClick;
let searchLimit = 10;
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FKFrLVSFTOXUw5CIZJKmbKJLXAALG0Af&q=" + character + "&limit=" + searchLimit + "&offset=0&rating=PG&lang=en&rating=g?&rating=pg"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let g = 0; g < searchLimit; g++) {
            let image = $("<img>");
            let gifRating = $("<p>");
            gifRating.text("Gif Rating: " + response.data[g].rating);
            console.log(response.data[g].rating);
            image.attr("src", response.data[g].images.original.url)
            $(".gifHolder").prepend(image);
            $(".gifHolder").prepend(gifRating);
        }
    })
};