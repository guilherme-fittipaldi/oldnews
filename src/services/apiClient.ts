import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://oldnews-backend.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
