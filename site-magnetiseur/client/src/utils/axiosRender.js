import axios from "axios";

const axiosRender = axios.create({
  baseURL: "https://backend-site-magnetiseur.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosRender;
