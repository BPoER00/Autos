import { useAuto } from "@/context/AutoContext";

//components
import Steps from "./Steps";
import ModelosList from "./ModelosList";
import ModelosNew from "./ModelosNew";
import { useModelos } from "@/context/ModelosContext";

function ModelosAction() {
  const { paginate } = useModelos();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <ModelosList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <ModelosNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default ModelosAction;
