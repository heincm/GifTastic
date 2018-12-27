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
            console.log(response)
            let image = $("<img>");
            let gifRating = $("<p>");
            gifRating.text("Gif Rating: " + response.data[g].rating);
            console.log(response.data[g].rating);
            image.attr("src", response.data[g].images.downsized_still.url)
                .attr("still", response.data[g].images.downsized_still.url)
                .attr("animated", response.data[g].images.downsized.url).addClass("still");
            $(".gifHolder").prepend(gifRating);
            $(".gifHolder").prepend(image);
        }
    }).catch(function (event) {
        console.log(event);
        console.log("I'm broken, yo!");
        let photo = $("<img src='https://media2.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy-downsized.gif'/>");
        let notWorking = $("<p>Uh oh....something's not quite right. Try again later</p>");
        let lineBreak = $("<br>")
        $(".gifHolder").prepend(photo);
        $(".gifHolder").prepend(notWorking);
        $(".gifHolder").prepend(lineBreak)
    })
};