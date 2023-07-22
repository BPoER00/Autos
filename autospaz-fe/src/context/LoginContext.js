"use client";
import { createContext, useContext, useState } from "react";
import axios from "axios";
import config from "@/config/config";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must used within a provider");
  return context;
};

const LoginProvider = ({ children }) => {
  const router = useRouter();

  const [data, setData] = useState([]);

  const loginApi = axios.create({
    baseURL: `${config.urlAPI}/auth`,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": cookie.get("miTokenName"),
    },
  });

  const Login = async (credentials) => {
    const res = await loginApi.post("/signin", credentials);

    if (res.status === 200) router.push("/Dashboard");

    if (res) {
      cookie.set("miTokenName", res.data.token, {
        expires: 1,
        path: "/Login",
        secure: true,
        sameSite: "strict",
      });
    }
  };

  const Logout = async () => {
    const res = await loginApi.get("/logout");
    console.log(res);
    setData(null);
    if (res) {
      cookie.set("miTokenName", null, {
        expires: 0,
        path: "/Login",
        secure: true,
        sameSite: "strict",
      });
    }
  };
  return (
    <LoginContext.Provider value={{ data, Login, Logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
