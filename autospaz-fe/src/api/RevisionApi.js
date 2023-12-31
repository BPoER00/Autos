import axios from "axios";
import config from "@/config/config";
import { getCookie } from "../config/cookiesConfig";

const RevisionApi = axios.create({
  baseURL: `${config.urlAPI}/Revision`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const getRevisionAuto = async () => {
  const res = await RevisionApi.get("/revisiones")
    .then((data) => {
      return data.data;
    })
    .catch((error) => error.response);

  return res;
};

export const postRevisionAuto = async (revision) => {
  const res = await RevisionApi.post("/", revision)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
