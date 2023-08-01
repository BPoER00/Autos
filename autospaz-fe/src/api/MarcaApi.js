import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

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
