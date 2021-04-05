import { Request } from "../utils";

const apiKey = "63a0d577";
const prefix = `?apikey=${apiKey}&y=2020&s=`;

/**
 * Asynchronously fetch data from the OMBD Api
 * @param {string} query
 * @returns {array || undefined}
 */

export const getMovieList = (query) => {
  query = query === null ? "" : query;
  return Request.get(`${prefix}${query}`);
};
