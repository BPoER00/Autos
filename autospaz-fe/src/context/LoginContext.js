"use client";
import { signIn } from "@/api/LoginApi";
import { createContext, useContext } from "react";

const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) throw new Error("useLogin must used within a provider");
  return context;
};

const LoginProvider = ({ children }) => {
  const Login = async (credentials) => signIn(credentials);

  return (
    <LoginContext.Provider value={{ Login }}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
