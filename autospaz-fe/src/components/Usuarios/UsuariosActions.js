"use client"
import { useUsuarios } from "@/context/UsuariosContext";

//components
import Steps from "./Steps";
import UsuariosList from "./UsuariosList";
import UsuariosNew from "./UsuariosNew";

function UsuariosActions() {
  const { paginate } = useUsuarios();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <UsuariosList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <UsuariosNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default UsuariosActions;
