"use client";
import { createContext, useContext, useState } from "react";

const ModelosContext = createContext();

export const useModelos = () => {
  const context = useContext(ModelosContext);
  if (!context)
    throw new Error("useModelos must used within a provider");
  return context;
};

function ModelosProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de modelos", status: "this" },
    { id: 2, name: "Nuevas modelos", status: "other" },
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
    <ModelosContext.Provider value={{ paginate, changePage }}>
      {children}
    </ModelosContext.Provider>
  );
}

export default ModelosProvider;
