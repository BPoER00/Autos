"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getMarca, getMarcaId } from "@/api/MarcaApi";
import { getModeloId } from "@/api/ModeloApi";
import { getAuto, postAuto } from "@/api/AutoApi";
import { TIPO_PLACA } from "@/constants/tipo-placa";

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
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState([]);

  const auto = async () => {
    const auto = await getAuto()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return auto;
  };

  useEffect(() => {
    getMarca().then((data) =>
      setMarca(data.map((m) => ({ value: m._id, label: m.name })))
    );
  }, []);

  const insert = async (credentials) => postAuto(credentials);

  const getId = async (id) => {
    getModeloId(id).then((data) =>
      setModelo(data.map((m) => ({ value: m.name, label: m.name })))
    );
  };

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
      value={{ TIPO_PLACA, paginate, changePage, marca, modelo, insert, auto, getId }}
    >
      {children}
    </AutoContext.Provider>
  );
}

export default AutoProvider;
