"use client";
import { createContext, useContext, useState } from "react";

const ConfiguracionesContext = createContext();

export const useConfiguraciones = () => {
  const context = useContext(ConfiguracionesContext);
  if (!context)
    throw new Error("useConfiguraciones must used within a provider");
  return context;
};

function ConfiguracionesProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Marca", status: "this" },
    { id: 2, name: "Modelo", status: "other" },
    { id: 3, name: "Componentes", status: "other" },
  ];

  const [paginate, setPaginate] = useState(defaultPaginate);

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  return (
    <ConfiguracionesContext.Provider value={{ paginate, changePage }}>
      {children}
    </ConfiguracionesContext.Provider>
  );
}

export default ConfiguracionesProvider;
