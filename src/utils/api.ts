import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5425",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  },
});
