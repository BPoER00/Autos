import DefaultComponent from "@/components/Globales/DefaultComponent";
import UsuariosActions from "@/components/Usuarios/UsuariosActions";
import UsuariosProvider from "@/context/UsuariosContext";

function page() {
  return (
    <DefaultComponent>
      <UsuariosProvider>
        <UsuariosActions />
      </UsuariosProvider>
    </DefaultComponent>
  );
}

export default page;
