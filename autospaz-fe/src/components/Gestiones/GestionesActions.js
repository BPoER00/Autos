"use client";
import { useGestiones } from "@/context/GestionesContext";

//components
import Steps from "./Steps";
import GestionesList from "./GestionesList";
import GestionesNew from "./GestionesNew";

function GestionesActions() {
  const { paginate } = useGestiones();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <GestionesList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <GestionesNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default GestionesActions;
