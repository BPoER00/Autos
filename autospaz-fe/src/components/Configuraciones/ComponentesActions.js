import ComponentesAction from "./Componentes/ComponentesAction";
import ComponentesProvider from "@/context/ComponentesContext";
function ComponentesActions() {
  return (
    <ComponentesProvider>
      <ComponentesAction />
    </ComponentesProvider>
  );
}

export default ComponentesActions;
