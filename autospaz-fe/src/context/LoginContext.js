"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import config from "@/config/config";
import { postCookie, getCookie } from "../config/cookiesConfig";

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must used within a provider");
  return context;
};

const LoginProvider = ({ children }) => {
  const loginApi = axios.create({
    baseURL: `${config.urlAPI}/auth`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": getCookie.data,
    },
  });

  const Login = async (credentials) => {
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

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
