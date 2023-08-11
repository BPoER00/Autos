"use client";
import { createContext, useContext, useState } from "react";
import { getModelo, postModelo } from "@/api/ModeloApi";

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

  const modelos = async () => {
    const modelo = await getModelo()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return modelo;
  };

  const insert = async (revision) => postModelo(revision);

  return (
    <ModelosContext.Provider value={{ paginate, changePage, modelos, insert }}>
      {children}
    </ModelosContext.Provider>
  );
}

export default ModelosProvider;
