"use client";
import AutosActions from "@/components/Autos/AutosActions";
import DefaultComponent from "@/components/Globales/DefaultComponent";
import AutoProvider from "@/context/AutoContext";

function Content() {
  return (
    <>
      <DefaultComponent>
        <AutoProvider>
          <AutosActions />
        </AutoProvider>
      </DefaultComponent>
    </>
  );
}

export default Content;
