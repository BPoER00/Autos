"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getMarca, getMarcaId } from "@/api/MarcaApi";
import { getModelo } from "@/api/ModeloApi";
import { getAuto, postAuto } from "@/api/AutoApi";

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
  const [auto, setAuto] = useState({});
  const [marca, setMarca] = useState({});
  const [modelo, setModelo] = useState({});

  getAuto()
    .then((data) => setAuto(data))
    .catch((error) => setAuto(error));

  getMarca().then((data) =>
    setMarca(data.map((m) => ({ value: m.name, label: m.name })))
  );
  getModelo().then((data) =>
    setModelo(data.map((m) => ({ value: m.name, label: m.name })))
  );

  useEffect(() => {}, [paginate]);

  console.log(auto);
  const insert = async (credentials) => postAuto(credentials);

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  return (
    <AutoContext.Provider
      value={{ paginate, changePage, marca, modelo, insert, auto, getMarcaId }}
    >
      {children}
    </AutoContext.Provider>
  );
}

export default AutoProvider;
