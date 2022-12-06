import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://oldnews-backend.herokuapp.com", // "https://179.99.167.212:8081", //
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  //   requestCert: false,
  // }),
});

export default axiosClient;
