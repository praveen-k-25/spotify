const search = document.querySelector(".search");
const box = document.querySelector(".box");


search.addEventListener("click",()=>{
    box.classList.add('display');
    console.log(box.classList);
    
})

const spotifySearch = document.querySelector(".spotify-search");
const spotifyInput = document.querySelector(".spotify-input");
console.log(spotifySearch.classList);
console.log(spotifyInput.classList);



spotifySearch.addEventListener("click",()=>{
    spotifyInput.classList.add('display2');
    console.log(spotifyInput);
})

