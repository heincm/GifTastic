let character = "Mario";
let searchLimit = 10;
let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FKFrLVSFTOXUw5CIZJKmbKJLXAALG0Af&q=" + character + "&limit=" + searchLimit + "&offset=0&rating=PG&lang=en"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    for (let g = 0; g < searchLimit; g++) {
        let image = $("<img>")
        image.attr("src", response.data[g].images.original.url)
        $(".gifHolder").append(image);
    }
});