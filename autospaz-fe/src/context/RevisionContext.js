"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getRevisionAuto } from "@/api/RevisionApi";
import { getAuto } from "@/api/AutoApi";
import { getComponente } from "@/api/ComponentesApi";

const RevisionContext = createContext();

export const useRevision = () => {
  const context = useContext(RevisionContext);
  if (!context) throw new Error("useRevision must used within a provider");
  return context;
};

function RevisionProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Listado De Revisiones", status: "this" },
    { id: 2, name: "Nueva Revision", status: "other" },
  ];

  const [paginate, setPaginate] = useState(defaultPaginate);
  const [auto, setAuto] = useState();
  const [componente, setComponente] = useState();

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  useEffect(() => {
    getAuto().then((data) =>
      setAuto(data.map((m) => ({ value: m.placa, label: m.placa })))
    );
    getComponente().then((data) =>
      setComponente(data.map((m) => ({ value: m._id, label: m.name })))
    );
  }, []);

  const revision = async () => {
    const revisiones = await getRevisionAuto()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return revisiones;
  };

  return (
    <RevisionContext.Provider
      value={{ paginate, changePage, revision, auto, componente }}
    >
      {children}
    </RevisionContext.Provider>
  );
}

export default RevisionProvider;
