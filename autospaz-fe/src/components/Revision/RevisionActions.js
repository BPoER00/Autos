"use client"
import { useRevision } from "@/context/RevisionContext";

//components
import Steps from "./Steps";
import RevisionList from "./RevisionList";
import RevisionNew from "./RevisionNew";

function RevisionActions() {
  const { paginate } = useRevision();

  return (
    <>
      <Steps />
      {paginate.map((page) => {
        if (page.id === 1 && page.status === "this") {
          return <RevisionList key={page.id} />;
        } else if (page.id === 2 && page.status === "this") {
          return <RevisionNew key={page.id} />;
        } else {
          return null;
        }
      })}
    </>
  );
}

export default RevisionActions;
