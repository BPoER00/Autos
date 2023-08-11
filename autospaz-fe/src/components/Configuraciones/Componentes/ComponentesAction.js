//components
import Steps from "./Steps";
import ComponentesList from "./ComponentesList";
import ComponentesNew from "./ComponentesNew";
import { useComponentes } from "@/context/ComponentesContext";

function ComponentesAction() {
  const { paginate } = useComponentes();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <ComponentesList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <ComponentesNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default ComponentesAction;
