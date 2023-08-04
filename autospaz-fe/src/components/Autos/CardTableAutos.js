import React from "react";

function CardTableAutos({ marca, modelo, placa, year, image }) {
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4">
      <div className="max-w-md py-4 px-8 bg-white">
        <div>
          <img
            className="w-24 h-24 object-cover rounded-full border-2 border-indigo-500"
            src="https://www.pruebaderuta.com/wp-content/uploads/2015/05/superautos.jpg"
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Year: {year}</h2>
          <div className="mt-2 text-gray-600">
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="text-xl font-medium text-indigo-500">
            Placa: {placa}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTableAutos;
