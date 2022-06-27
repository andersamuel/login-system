import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const authenticate = async (email, password) => {
  return api
    .post("/authenticate", { email, password })
    .then((response) => send(response.data))
    .catch((error) => send(error.response.data));
};

export const test = async () => {
  return api.get("/");
};
