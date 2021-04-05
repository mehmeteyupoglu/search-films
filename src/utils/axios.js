import axios from "axios";

const BASE_URL = "http://www.omdbapi.com";
/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
