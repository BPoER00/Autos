"use client";
import CardComponentsAll from "./CardComponentsAll";
import { useState, useEffect } from "react";
import CardTableAutos from "./CardTableAutos";
import { useAuto } from "@/context/AutoContext";

import LoadingBar from "./LoadingBar";

function page() {
  const { auto } = useAuto();

  const [data, setData] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await auto());
  };

  if (data.length === 0) {
    return (
      <>
        <CardComponentsAll>
          <div className="w-full max-h-[55vh] overflow-auto">
            <div className="flex items-center justify-center">
              <div className="col-span-12">
                <div className="lg:overflow-visible">
                  <p>No se encontraron datos</p>
                </div>
              </div>
            </div>
          </div>
        </CardComponentsAll>
      </>
    );
  }

  return (
    <CardComponentsAll>
      <div className="w-full max-h-[55vh] overflow-auto">
        {data.length === 0 ? (
          <LoadingBar />
        ) : (
          <div className="flex flex-wrap">
            {data.map((autoData) => (
              <CardTableAutos
                key={autoData._id}
                marca={autoData.marca[0].name}
                modelo={autoData.modelo[0].name}
                placa={autoData.placa}
                year={autoData.year}
              />
            ))}
          </div>
        )}
      </div>
    </CardComponentsAll>
  );
}

export default page;
