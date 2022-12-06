import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://179.99.167.212:8081", //"https://oldnews-backend.herokuapp.com",
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
