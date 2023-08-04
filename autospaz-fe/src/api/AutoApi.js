import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const AutoApi = axios.create({
  baseURL: `${config.urlAPI}/auto`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getAuto = async () => {
  const res = await AutoApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const getAutoDashboard = async () => {
  const res = await AutoApi.get("/Dashboard")
    .then((data) => {
      return data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const postAuto = async (credentials) => {
  const res = await AutoApi.post("/", credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
