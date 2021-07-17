import axios from "axios";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviesContainer = document.querySelector(".movies");
const searchForm = document.querySelector(".search-form");
const searchBar = document.querySelector(".search-form__searchbar");

//get all movies on load
getMovies(API_URL);

//get the movies from api
function getMovies(url) {
  axios.get(url).then((response) => {
    showMovies(response.data.results);
  });
}

function showMovies(movies) {
  //clear container after rendering
  moviesContainer.innerHTML = "";
  movies.forEach((movie) => {
    //create an element to show movies
    const movies = document.createElement("div");
    //show movie poster, title and rating
    movies.innerHTML = `
  <img src="${IMG_PATH + movie.poster_path}" class="movies__poster" alt='${
      movie.original_title
    }' />
  <h3 class="title">${movie.original_title}</h3>
  <span class="rating">
  <img src="../svg/star.svg" class="rating__star"/>
  ${movie.vote_average}</span>
  `;
    movies.classList.add("movies__info");
    moviesContainer.appendChild(movies);
    //show movie details on click
    movies.addEventListener("click", () => {
      moviesContainer.innerHTML = `
      <div class="modal-content">
      <h2 class="title">${movie.original_title}</h2>
      <img src="${IMG_PATH + movie.poster_path}" alt='${
        movie.original_title
      }' class="movies__poster" />
      <p>${movie.overview}</p>
      </div>
`;
      console.log(movie);
    });
  });
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchBar.value;
  //check if any char is written
  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
  }
  //clear the search bar
  searchBar.value = "";
});
