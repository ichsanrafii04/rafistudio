const movie_menu = document.getElementById("movie");
const year_menu = document.getElementById("year");
const genre_menu = document.getElementById("genre");
const iklan = document.getElementById("iklan");
const featured = document.getElementById("feature");
var click_count = 0;

function movies() {
  movie_menu.classList.toggle("drop");
}

// GENRE
var genre_klik = document.getElementById("genres");

var content = document.getElementById("contents");
genre_klik.addEventListener("click", function genre() {
  click_count++;
  if (click_count % 2 === 1) {
    genre_menu.style.display = "block";
    content.style.display = "none";
    year_menu.style.display = "none";
    iklan.style.display = "none";
    featured.style.display = "none";
  } else {
    genre_menu.style.display = "none";
    content.style.display = "grid";
    year_menu.style.display = "none";
    iklan.style.display = "flex";
    featured.style.display = "block";
  }
});

// year
var year_klik = document.getElementById("years");

var content = document.getElementById("contents");
year_klik.addEventListener("click", function year() {
  click_count++;
  if (click_count % 2 === 1) {
    year_menu.style.display = "block";
    content.style.display = "none";
    genre_menu.style.display = "none";
    iklan.style.display = "none";
    featured.style.display = "none";
  } else {
    year_menu.style.display = "none";
    content.style.display = "grid";
    genre_menu.style.display = "none";
    iklan.style.display = "flex";
    featured.style.display = "block";
  }
});

// BARS
var menu = document.getElementById("menus");
var bars_klik = document.getElementById("bars");
bars_klik.addEventListener("click", function () {
  click_count++;
  if (click_count % 2 === 1) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

// PLAY BUTTON
// var foto = document.getElementById("foto");
// const playbutton = document.getElementById("play_button");
// function foto() {
//   if (foto.style.width("130%")) {
//     playbutton.style.visibility = "visible";
//   }
// }
