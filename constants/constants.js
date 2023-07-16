import { fetch_data } from ".";

export const POPULAR_MOVIE_DATA = await fetch_data("movie/popular");
export const TOP_RATED_DATA = await fetch_data("movie/top_rated")