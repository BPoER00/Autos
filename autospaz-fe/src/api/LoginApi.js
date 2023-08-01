import axios from "axios";
import config from "@/config/config";
import { postCookie, getCookie } from "../config/cookiesConfig";

const loginApi = axios.create({
  baseURL: `${config.urlAPI}/auth`,
  headers: {
    "Content-Type": "application/json",
    "x-access-token": getCookie(),
  },
});

export const signIn = async (credentials) => {
  const res = await loginApi
    .post("/signin", credentials)
    .then((data) => {
      if (data.status === 200) postCookie(data.data.token);

      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};

export const signUp = async (credentials) => {
  const res = await loginApi
    .post("/signup", credentials)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error.response;
    });

  return res;
};
