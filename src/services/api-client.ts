import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e6917974df1a4aee876a35dc534d442a",
  },
});
