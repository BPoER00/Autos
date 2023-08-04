import DefaultComponent from "@/components/Globales/DefaultComponent";
import RevisionProvider from "@/context/RevisionContext";
import RevisionActions from "@/components/Revision/RevisionActions";

function page() {
  return (
    <>
      <DefaultComponent>
        <RevisionProvider>
          <RevisionActions />
        </RevisionProvider>
      </DefaultComponent>
    </>
  );
}

export default page;
