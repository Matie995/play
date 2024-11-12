const KEYAPP = "1b551150668e4dc79411de7e4222dc85"
const loaderEl = document.getElementById("js.preloader")
const gameList = document.querySelector(".gameList")
const loadMoreGamesBtn = document.querySelector(".main-button")
const url = `https://api.rawg.io/api/games?key=${KEYAPP}&dates=2024-01-01,2024-12-30&ordering=-added`;

function loadGames(url){
    loaderEl.classList.remove("loaded"); 
    fetch(url)
    .then(response => respons.json());
    .then(data =)
}


loadGames(url);
