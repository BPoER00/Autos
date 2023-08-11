import { useAuto } from "@/context/AutoContext";

//components
import Steps from "./Steps";
import MarcasList from "./MarcasList";
import MarcasNew from "./MarcasNew";
import { useMarcas } from "@/context/MarcasContext";

function MarcasAction() {
  const { paginate } = useMarcas();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <MarcasList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <MarcasNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default MarcasAction;
