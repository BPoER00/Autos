"use client";
import { createContext, useContext, useState } from "react";

const UsuariosContext = createContext();

export const useUsuarios = () => {
  const context = useContext(UsuariosContext);
  if (!context) throw new Error("useUsuarios must used within a provider");
  return context;
};

function UsuariosProvider({ children }) {
  const defaultPaginate = [
    { id: 1, name: "Listado De Usuarios", status: "this" },
    { id: 2, name: "Nueva Usuarios", status: "other" },
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
    <UsuariosContext.Provider
      value={{ paginate, changePage  }}
    >
      {children}
    </UsuariosContext.Provider>
  );
}

export default UsuariosProvider;
