"use client";
import { createContext, useContext, useState } from "react";

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

  const changePage = (id) => {
    setPaginate((prevPaginate) =>
      prevPaginate.map((page) => ({
        ...page,
        status: page.id === id ? "this" : "other",
      }))
    );
  };

  return (
    <RevisionContext.Provider
      value={{ paginate, changePage  }}
    >
      {children}
    </RevisionContext.Provider>
  );
}

export default RevisionProvider;
