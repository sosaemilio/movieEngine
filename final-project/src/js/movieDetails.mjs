import { findMovieById } from "./externalServices.mjs";
import { getLocalStorage } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

let movie = {};

export default async function movieDetails(movieID) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    movie = await findMovieById(movieID);
    //let movieList = getLocalStorage("movie-results");
    //movie = movieList[2];
    // once we have the product details we can render out the HTML
    renderMovieDetails();
    // add listener to Add to Cart button
    document.getElementById("addToWatchlist").addEventListener("click", addToWatchlist);
}

function addToWatchlist() {
    let movies = getLocalStorage("watchlist");
    if (!Array.isArray(movies)) { 
        movies = [movies];
        movies.shift();
    }
    movies.push(movie);
    setLocalStorage("watchlist", movies);
    console.log(movie);
}

function renderMovieDetails() {
    if (movie) {
        document.getElementById("movie-banner").src = movie.posterURLs.original;
        document.querySelector("h1").textContent = movie.title;
        document.querySelector(".title-box p").textContent = movie.year;
        document.querySelector(".duration").textContent = `${movie.runtime} minutes`;
        document.querySelector(".minium-age").textContent = `${movie.advisedMinimumAudienceAge}+`;

        let miniumAgeTag = document.querySelector(".countries");
        let genres = movie.genres;
        console.log(genres);
        genres.forEach(genre => {
            const newGenre = document.createElement("p");
            newGenre.textContent = genre.name;
            newGenre.className = "genres";
            document.querySelector(".movie-classification-details").insertBefore(newGenre, miniumAgeTag);
        });


        document.querySelector(".countries").textContent = movie.countries[0];
        document.querySelector(".tagline").textContent = movie.tagline;
        document.querySelector(".description").textContent = movie.overview;
        

        const castTitle = document.createElement("h3");
        castTitle.textContent = "Cast";
        document.querySelector(".movie-content").insertBefore(castTitle, document.querySelector(".casts"));

        let cast = movie.cast;
        cast.forEach(name => {
            const newNode = document.createElement("li");
            newNode.textContent = name;
            document.querySelector(".casts").appendChild(newNode);
        });

        document.querySelector(".rating").textContent = `Rating ${movie.imdbRating}`;
        document.querySelector(".imbd-rating a").href = "https://www.imdb.com/title/" + movie.imdbId;
        document.querySelector("#trailer").src = "https://www.youtube.com/embed/" + movie.youtubeTrailerVideoId;
    }

}