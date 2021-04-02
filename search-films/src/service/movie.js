import { Request } from "../utils";

const apiKey = process.env.VUE_APP_SECRET_KEY;
const prefix = `?apikey=${apiKey}&t=`;

/**
 * Asynchronously fetch data from the OMBD Api
 * @param {string} query
 * @returns {array || undefined}
 */

export const getMovieList = (query) => {
  return Request.get(`${prefix}${query}`);
};
