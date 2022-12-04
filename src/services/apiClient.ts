import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_DEV_BACKEND_BASEURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
