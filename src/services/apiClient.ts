import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://179.99.167.212:8081", //"https://oldnews-backend.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
