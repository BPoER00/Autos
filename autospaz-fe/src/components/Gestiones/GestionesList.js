import { useState, useEffect } from "react";
import CardComponentsAll from "../Contenedores/CardComponentsAll";
import LoadingBar from "../Inputs/LoadingBar";
import TableData from "../Globales/TableData";
import { useGestiones } from "@/context/GestionesContext";
import ContenidoTabla from "./ContenidoTabla";

function GestionesList() {
  const { gestion } = useGestiones();
  const [data, setData] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await gestion());
  };

  const cabeceras = ["Auto", "Descripcion", "Cantidad", "Transaccion", "Opciones"];
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
          <TableData cabecera={cabeceras}>
            <ContenidoTabla data={data} />
          </TableData>
        )}
      </div>
    </CardComponentsAll>
  );
}

export default GestionesList;
