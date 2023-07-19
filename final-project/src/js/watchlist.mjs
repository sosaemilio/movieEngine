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
    </div>`;
  
    return newMovie;
}

export default async function movieList(movieTitle, selector) {
  var movieList = await getMoviesByTitle(movieTitle);
  //setLocalStorage("movie-results", movieList);
  //var movieList = getLocalStorage("movie-results")
  renderListWithTemplate(movieResultTemplate, document.querySelector(selector), movieList);
}