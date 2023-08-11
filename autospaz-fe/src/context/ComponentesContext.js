"use client";
import { createContext, useContext, useState } from "react";
import { getComponente, postComponente } from "@/api/ComponentesApi";

const ComponenteContext = createContext();

export const useComponentes = () => {
  const context = useContext(ComponenteContext);
  if (!context) throw new Error("useComponentes must used within a provider");
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

  const componentes = async () => {
    const modelo = await getComponente()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return modelo;
  };

  const insert = async (revision) => postComponente(revision);

  return (
    <ComponenteContext.Provider value={{ paginate, changePage, componentes, insert }}>
      {children}
    </ComponenteContext.Provider>
  );
}

export default ComponentesProvider;
