import { getParam } from "./utils.mjs";
import movieList from "./movieList.mjs";

let movieTitle = getParam("search");

movieList(movieTitle, ".movie-search");

// Add the "You Search For"
document
  .querySelector(".search-result-title")
  .insertAdjacentText("beforeend", `You search for: ${movieTitle}`);
