import axios from "axios";

const instance = axios.create({
  baseURL: "http://195.133.196.5/:4444",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});

export default instance;
