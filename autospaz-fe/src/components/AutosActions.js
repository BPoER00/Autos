import { useAuto } from "@/context/AutoContext";

//components
import Steps from "./Steps";
import AutosList from "@/components/AutosList";
import AutosNew from "@/components/AutosNew";

function AutosActions() {
  const { paginate } = useAuto();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <AutosList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <AutosNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default AutosActions;
