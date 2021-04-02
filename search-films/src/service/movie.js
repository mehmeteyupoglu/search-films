import { Request } from "../utils";

const prefix = "&t=";

/**
 * Asynchronously fetch data from the OMBD Api
 * @param {string} query
 * @returns {array || undefined}
 */

export const getMovieList = (query) => {
  return Request.get(`${prefix}${query}`);
};
