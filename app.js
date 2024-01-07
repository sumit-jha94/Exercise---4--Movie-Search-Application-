let api = 'http://www.omdbapi.com/?i=tt3896198&apikey=6cb42c23&t=rrr'

fetch(api).then(function(data){
    return data.json();
    
}).then(function(data){
    console.log(data);
})