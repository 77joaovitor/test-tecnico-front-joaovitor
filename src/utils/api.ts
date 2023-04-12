import axios from "axios";

const api = axios.create({
  baseURL: "https://api.randomuser.me/?results=3",
});

export default api;
