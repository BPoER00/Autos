"use client";
import AutosActions from "@/components/AutosActions";
import DefaultComponent from "@/components/DefaultComponent";
import AutoProvider from "@/context/AutoContext";

function Content({ children }) {
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
