"use client";
import { createContext, useContext } from "react";

const AutoContext = createContext();

export const useAuto = () => {
  const context = useContext(AutoContext);
  if (!context) throw new Error("useAuto must used within a provider");
  return context;
};

function AutoProvider({ children }) {
  return <AutoContext.Provider value={""}>{children}</AutoContext.Provider>;
}

export default AutoProvider;
