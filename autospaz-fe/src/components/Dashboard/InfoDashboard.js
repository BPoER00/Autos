"use client";
import { useEffect, useState } from "react";

import CardInfoComponentDashboard from "./CardInfoComponentDashboard";
import CardMidComponentDashboard from "./CardMidComponentDashboard";
import CardFootComponentDashboard from "./CardFootComponentDashboard";

import { useDashboard } from "@/context/DashboardContext";

function InfoDashboard() {
  const { auto, autoDashboard, GananciasPerdidas } = useDashboard();
  const [data, setData] = useState([]);
  const [grapAutos, setGrapAutos] = useState([]);
  const [grapGastos, setGrapGastos] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await auto());
    setGrapAutos(await autoDashboard());
    setGrapGastos(await GananciasPerdidas());
  };

  const countAuto = data ? data.length : "0";
  const grapAutosData = grapAutos ? grapAutos : null;
  const grapGastosData = grapGastos ? grapGastos : null;

  const ganancias = grapGastosData.map((data) => data.precio);

  const sumEstado1 = ganancias.reduce((acc, costo, index) => {
    if (grapGastosData[index].status === 1) {
      return acc + costo;
    }
    return acc;
  }, 0);

  const sumEstado2 = ganancias.reduce((acc, costo, index) => {
    if (grapGastosData[index].status === 2) {
      return acc + costo;
    }
    return acc;
  }, 0);

  const total = sumEstado1 - sumEstado2;

  const graficaDinero = [sumEstado1, sumEstado2];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <CardInfoComponentDashboard name={"Autos"} value={countAuto} />
        <CardInfoComponentDashboard
          name={"Ganancias"}
          value={`Q. ${sumEstado1}`}
        />
        <CardInfoComponentDashboard
          name={"Perdidas"}
          value={`Q. ${-sumEstado2}`}
        />
        <CardInfoComponentDashboard
          name={"Dinero Total"}
          value={`Q ${total}`}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <CardMidComponentDashboard nombre={"Dinero"} data={graficaDinero} />
        <CardMidComponentDashboard nombre={"Autos"} data={grapAutosData} />
      </div>

      <div className="mt-8 mx-4">
        <CardFootComponentDashboard />
      </div>
    </>
  );
}

export default InfoDashboard;
