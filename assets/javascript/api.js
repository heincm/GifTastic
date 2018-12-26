function getGifs(characterClick) {

    let character = characterClick;
    let searchLimit = 10;
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FKFrLVSFTOXUw5CIZJKmbKJLXAALG0Af&q=" + character + "&limit=" + searchLimit + "&offset=0&rating=PG&rating=g&lang=en"


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
            image.attr("src", response.data[g].images.downsized_still.url).addClass(response.data[g].images.downsized.url).attr("value", "still").addClass("still");
            $(".gifHolder").prepend(image); 
            //$(".gifHolder").append(gifRating);
        }
    })
};