import ConfiguracionesActions from "@/components/Configuraciones/ConfiguracionesActions";
import DefaultComponent from "@/components/Globales/DefaultComponent";
import ConfiguracionesProvider from "@/context/ConfiguracionesContext";

function page() {
  return (
    <>
      <DefaultComponent>
        <ConfiguracionesProvider>
          <ConfiguracionesActions />
        </ConfiguracionesProvider>
      </DefaultComponent>
    </>
  );
}

export default page;
