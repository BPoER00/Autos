"use client";
import { createContext, useContext, useState } from "react";
import { getMarca, postMarca } from "@/api/MarcaApi";

const MarcasContext = createContext();

export const useMarcas = () => {
  const context = useContext(MarcasContext);
  if (!context)
    throw new Error("useMarcas must used within a provider");
  return context;
};

function MarcasProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Lista de marcas", status: "this" },
    { id: 2, name: "Nuevas marcas", status: "other" },
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

  const marcas = async () => {
    const marca = await getMarca()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return marca;
  };

  const insert = async (revision) => postMarca(revision);

  return (
    <MarcasContext.Provider value={{ paginate, changePage, marcas, insert }}>
      {children}
    </MarcasContext.Provider>
  );
}

export default MarcasProvider;
