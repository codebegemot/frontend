import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7003/api", // Замените на адрес вашего бэкенда
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
