"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getMarca } from "@/api/MarcaApi";
import { getModelo, postModelo } from "@/api/ModeloApi";

const ModelosContext = createContext();

export const useModelos = () => {
  const context = useContext(ModelosContext);
  if (!context) throw new Error("useModelos must used within a provider");
  return context;
};

function ModelosProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de modelos", status: "this" },
    { id: 2, name: "Nuevas modelos", status: "other" },
  ];

  const [paginate, setPaginate] = useState(defaultPaginate);
  const [marca, setMarca] = useState();

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  useEffect(() => {
    getMarca().then((data) =>
      setMarca(data.map((m) => ({ value: m._id, label: m.name })))
    );
  }, []);

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
    <ModelosContext.Provider value={{ marca, paginate, changePage, modelos, insert }}>
      {children}
    </ModelosContext.Provider>
  );
}

export default ModelosProvider;
