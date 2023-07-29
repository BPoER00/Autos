import React from "react";

import CardInfoComponentDashboard from "./CardInfoComponentDashboard";
import CardMidComponentDashboard from "./CardMidComponentDashboard";
import CardFootComponentDashboard from "./CardFootComponentDashboard";

function InfoDashboard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        <CardInfoComponentDashboard name={"Autos"} value={"0"} />
        <CardInfoComponentDashboard name={"Ganancias"} value={"0"} />
        <CardInfoComponentDashboard name={"Perdidas"} value={"0"} />
        <CardInfoComponentDashboard name={"Dinero Total"} value={"0"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <CardMidComponentDashboard nombre={"Dinero"} />
        <CardMidComponentDashboard nombre={"Autos"} />
      </div>

      <div className="mt-8 mx-4">
        <CardFootComponentDashboard />
      </div>
    </>
  );
}

export default InfoDashboard;
