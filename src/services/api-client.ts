import axios from "axios";

const baseURL = import.meta.env.VITE_RAWG_BASE_URL;
const apiKey = import.meta.env.VITE_RAWG_API_KEY;
export default axios.create({
  baseURL: baseURL,
  params: {
    key: apiKey,
  },
});
