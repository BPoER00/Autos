"use client";
import { useConfiguraciones } from "@/context/ConfiguracionesContext";

//components
import Steps from "./Steps";
import ComponentesActions from "./ComponentesActions";
import MarcasActions from "./MarcasActions";
import ModelosActions from "./ModelosActions";

function ConfiguracionesActions() {
  const { paginate } = useConfiguraciones();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <MarcasActions key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <ModelosActions key={page.id} />;
        } else if (page.id === 3 && page.status === "this") {
          return <ComponentesActions key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default ConfiguracionesActions;
