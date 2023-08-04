import DefaultComponent from "@/components/Globales/DefaultComponent";
import GestionesActions from "@/components/Gestiones/GestionesActions";
import GestionesProvider from "@/context/GestionesContext";

function page() {
  return (
    <DefaultComponent>
    <GestionesProvider>
      <GestionesActions />
    </GestionesProvider>
  </DefaultComponent>  )
}

export default page