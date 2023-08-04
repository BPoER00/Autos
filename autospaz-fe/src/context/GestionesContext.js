"use client";
import { createContext, useContext, useState } from "react";

const GestionesContext = createContext();

export const useGestiones = () => {
  const context = useContext(GestionesContext);
  if (!context) throw new Error("useGestiones must used within a provider");
  return context;
};

function GestionesProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Listado De Gestiones", status: "this" },
    { id: 2, name: "Nueva Gestiones", status: "other" },
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
    <GestionesContext.Provider
      value={{ paginate, changePage  }}
    >
      {children}
    </GestionesContext.Provider>
  );
}

export default GestionesProvider;
