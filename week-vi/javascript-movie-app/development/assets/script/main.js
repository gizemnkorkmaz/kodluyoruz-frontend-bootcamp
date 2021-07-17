import axios from "axios";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviesContainer = document.querySelector(".movies");
const searchForm = document.querySelector(".search-form");
const searchBar = document.querySelector(".search-form__searchbar");
const modalbg = document.querySelector(".modal-bg");

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
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.189 5.41802L9.22178 4.84146L7.44834 1.24615C7.39991 1.14771 7.32022 1.06802 7.22178 1.01959C6.97491 0.897711 6.67491 0.999273 6.55147 1.24615L4.77803 4.84146L0.810845 5.41802C0.70147 5.43365 0.60147 5.48521 0.524907 5.56334C0.432347 5.65847 0.381343 5.78646 0.383101 5.91918C0.384859 6.0519 0.439235 6.1785 0.534282 6.27115L3.40459 9.06959L2.72647 13.0211C2.71057 13.1131 2.72074 13.2076 2.75583 13.294C2.79093 13.3805 2.84953 13.4554 2.92501 13.5102C3.00049 13.565 3.08982 13.5976 3.18288 13.6042C3.27593 13.6108 3.36898 13.5913 3.45147 13.5477L6.99991 11.6821L10.5483 13.5477C10.6452 13.5993 10.7577 13.6165 10.8655 13.5977C11.1374 13.5508 11.3202 13.293 11.2733 13.0211L10.5952 9.06959L13.4655 6.27115C13.5437 6.19459 13.5952 6.09459 13.6108 5.98521C13.653 5.71177 13.4624 5.45865 13.189 5.41802Z" fill="#FEA250"/>
</svg>
  ${movie.vote_average}</span>
  <button class="modal-btn">See details</button>
  `;
    movies.classList.add("movies__info");
    moviesContainer.appendChild(movies);
    //show movie details on click
    movies.addEventListener("click", () => {
      moviesContainer.innerHTML = "";
      modalbg.innerHTML = `
      <div class="modal-content">
      <h2 class="title">${movie.original_title}</h2>
      <img src="${IMG_PATH + movie.poster_path}" alt='${
        movie.original_title
      }' class="movies__poster" />
      <p>${movie.overview}</p>
      <button class="go-back"> Go back </button>
      </div>
`;
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
