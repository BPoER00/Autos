import MarcasAction from "./Marcas/MarcasActions";
import MarcasProvider from "@/context/MarcasContext";

function MarcasActions() {
  return (
    <MarcasProvider>
      <MarcasAction />
    </MarcasProvider>
  );
}

export default MarcasActions;
