"use client";
import { createContext, useContext, useState } from "react";

const ComponenteContext = createContext();

export const useComponentes = () => {
  const context = useContext(ComponenteContext);
  if (!context)
    throw new Error("useComponentes must used within a provider");
  return context;
};

function ComponentesProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de Componentes", status: "this" },
    { id: 2, name: "Nuevas Componentes", status: "other" },
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
    <ComponenteContext.Provider value={{ paginate, changePage }}>
      {children}
    </ComponenteContext.Provider>
  );
}

export default ComponentesProvider;
