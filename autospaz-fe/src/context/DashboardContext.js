"use client";
import { createContext, useContext } from "react";
import { getAuto, getAutoDashboard } from "@/api/AutoApi";
import { getDetallesGastos } from "@/api/DetalleGastosApi";

const DashboardContext = createContext();

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must used within a provider");
  return context;
};

function DashboardProvider({ children }) {
  const auto = async () => {
    const auto = await getAuto()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return auto;
  };

  const autoDashboard = async () => {
    const auto = await getAutoDashboard()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return auto;
  };

  const GananciasPerdidas = async () => {
    const datos = await getDetallesGastos()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return datos;
  };

  return (
    <DashboardContext.Provider value={{ auto, autoDashboard, GananciasPerdidas }}>
      {children}
    </DashboardContext.Provider>
  );
}

export default DashboardProvider;
