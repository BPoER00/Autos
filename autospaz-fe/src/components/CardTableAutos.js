import React from "react";

function CardTableAutos({ marca, modelo, placa, year, image }) {
  return (
    <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div class="max-w-md py-4 px-8 bg-white">
        <img
          class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
        <div>
          <h2 class="text-gray-800 text-3xl font-semibold">Year: {year}</h2>
          <p class="mt-2 text-gray-600">
            Marca: {marca} | Modelo: {modelo}
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">
            Placa: {placa}
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTableAutos;