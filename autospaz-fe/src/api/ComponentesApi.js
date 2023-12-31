import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const ComponenteApi = axios.create({
  baseURL: `${config.urlAPI}/componente`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getComponente = async () => {
  const res = await ComponenteApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const postComponente = async (data) => {
  const res = await ComponenteApi.post("/", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};