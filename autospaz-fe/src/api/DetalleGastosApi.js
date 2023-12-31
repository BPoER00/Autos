import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const DetalleGastosApi = axios.create({
  baseURL: `${config.urlAPI}/gastoDetalle`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getDetallesGastos = async () => {
  const res = await DetalleGastosApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const postDetallesGatos = async (gestiones) => {
  const res = await DetalleGastosApi.post("/", gestiones)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
