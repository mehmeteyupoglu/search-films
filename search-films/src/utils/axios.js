import axios from "axios";

const BASE_URL = process.env.VUE_APP_BASE_URL;
/**
 * Create an axios instance
 * @function
 * @params {object} baseURL: value
 */
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
