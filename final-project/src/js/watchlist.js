import { getParam } from "./utils.mjs";
import movieList from "./movieList.mjs";

let movieTitle = getParam("search");

movieList(movieTitle, ".movie-watchlist");
