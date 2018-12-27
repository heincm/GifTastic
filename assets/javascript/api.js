function getGifs(characterClick) {

    let character = characterClick;
    let searchLimit = 10;
    let queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FKFrLVSFTOXUw5CIZJKmbKJLXAALG0Af&q=" + character + "&limit=" + searchLimit + "&offset=0&rating=PG&rating=g&lang=en"


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (let g = 0; g < searchLimit; g++) {
            let still = response.data[g].images.downsized_still.url
            let animated = response.data[g].images.downsized.url
            $(".gifHolder").prepend(`
            <p>Gif Rating: ${response.data[g].rating}</p>
            <img src="${still}" still="${still}" animated="${animated}" data-state="still"/>`)
        }
    }).catch(function (event) {
        $(".gifHolder").prepend(`<p>Uh oh....something's not quite right. Try again later</p>
        <img src='https://media2.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy-downsized.gif'/>
        <br>
        `);
    })
};