import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const marcaCache = {};

const MarcaApi = axios.create({
  baseURL: `${config.urlAPI}/marca`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getMarca = async () => {
  const res = await MarcaApi.get("/")
    .then((data) => {
      return data.data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const getMarcaId = async (id) => {
  try {
    if (marcaCache[id]) {
      console.log("Datos obtenidos de la caché.");
      return marcaCache[id];
    }

    const res = await MarcaApi.get(`/${id}`);

    marcaCache[id] = res;

    return res;
  } catch (e) {}
};

export const postMarca = async (data) => {
  const res = await MarcaApi.post("/", data)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
