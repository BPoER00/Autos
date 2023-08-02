"use client";
import CardComponentsAll from "./CardComponentsAll";
import { useEffect } from "react";
import CardTableAutos from "./CardTableAutos";
import { useAuto } from "@/context/AutoContext";

function page() {
  const { auto, getMarcaId } = useAuto();

  return (
    <CardComponentsAll>
      <div className="flex flex-wrap -mx-4">
        {auto.map((autoData, index) => (
          <CardTableAutos
            key={index}
            marca={autoData.marca}
            modelo={autoData.modelo}
            placa={autoData.placa}
            year={autoData.year}
          />
        ))}
      </div>
    </CardComponentsAll>
  );
}

export default page;
