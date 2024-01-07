let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6cb42c23&t='



function searchMovie() {
    let query = document.getElementById('movieName').value;

    // with search variable we got api link and search term from user and created a link
    let search = api + query;
    console.log(search)
    fetch(search).then(function(data){
        return data.json();
        
    }).then(function(data){
        document.getElementById('title').innerText = data.Title;
        document.getElementById('desc').innerText = data.Plot;
        document.getElementById('actors').innerText = data.Actors;
        document.getElementById('directors').innerText = data.Director;
        document.getElementById('writers').innerText = data.Writer;
        document.getElementById('collection').innerText = data.BoxOffice;
        document.getElementById('awards').innerText = data.Awards;
        document.getElementById('rating').innerText = data.imdbRating;
        // we want to get the image in src of image
        document.getElementById('poster').src = data.Poster;
        console.log(data)
       
    })
}