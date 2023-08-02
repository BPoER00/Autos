import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const ModeloApi = axios.create({
  baseURL: `${config.urlAPI}/modelo`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getModelo = async () => {
  const res = await ModeloApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => error.response);

  return res;
};
