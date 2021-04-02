import axios from "axios";

const apiKey = process.env.API_KEY;

/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${apiKey}`,
});

export default axiosInstance;
