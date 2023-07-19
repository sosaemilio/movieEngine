import movieDetails from "./movieDetails.mjs";
import { getParam } from "./utils.mjs";

let movieId = getParam("movie");
movieDetails(movieId);
