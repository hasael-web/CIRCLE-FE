import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5425",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NjBjZGQ0LThlODYtNDAxOS1iODcxLTI0MTQzMjEzODBkOCIsImlhdCI6MTY5ODM3MzcxOCwiZXhwIjoxNjk4OTc4NTE4fQ.veqo5DFqpP-d0GDfh7-xI66MMxGmox1WAkru2f3-xgk",
  },
});
