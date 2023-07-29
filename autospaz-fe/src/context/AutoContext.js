"use client";
import { createContext, useContext, useState } from "react";

const AutoContext = createContext();

export const useAuto = () => {
  const context = useContext(AutoContext);
  if (!context) throw new Error("useUsers must used within a provider");
  return context;
};

function AutoProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Listado De Autos", status: "this" },
    { id: 2, name: "Nuevo Auto", status: "other" },
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
    <AutoContext.Provider value={{ paginate, changePage }}>
      {children}
    </AutoContext.Provider>
  );
}

export default AutoProvider;
