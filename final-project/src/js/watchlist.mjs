import { getMoviesByTitle } from "./externalServices.mjs";
import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

function movieResultTemplate(movie) {
    const newMovie = `<!--Movie Card-->
    <div class="movie-card">
      <a href="/movie/index.html?movie=${movie.imdbId}">
        <figure class="card-img">
          <img
            src="${movie.posterURLs.original}"
            alt="${movie.originalTitle}"
          />
        </figure>
      </a>
      <div class="title-wrapper">
        <p class="movie-title">${movie.originalTitle}</p>
        <p class="movie-year">${movie.year}</p>
      </div>
      <div class="card-meta">
        <p>${movie.runtime} Mins</p>
        <p>IMBD ${movie.imdbRating}</p>
      </div>
      <button class="removeFromWatchlist" value="${movie.imdbId}">
        Watched
      </button>
    </div>`;
  
    return newMovie;
}

function removeFromWatchlist(imdbId){
    let movies = getLocalStorage("watchlist");
    let cleanedMovies = [];
    movies.forEach(movie => {
        console.log(movie);
        if (movie.imdbId !== imdbId) {
            cleanedMovies.push(movie);
        } else {
            console.log ("movie removed");
        }
    });
    setLocalStorage("watchlist", cleanedMovies);
}

export default async function watchlist(selector) {
  let movieList = getLocalStorage("watchlist");
  renderListWithTemplate(movieResultTemplate, document.querySelector(selector), movieList);
  const removeButtonList = document.querySelectorAll(".removeFromWatchlist");
  removeButtonList.forEach(function(i) {
    i.addEventListener("click", (e) => {
        removeFromWatchlist(e.target.value);
        location.reload();
    });
  })
  
}