"use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ name, data }) {
  const [charOptions, setCharOptions] = useState({});
  let marcas = [];
  let numero = [];

  if (name === "Autos") {
    if (data) {
      marcas = data.map((item) => item.marca);
      numero = data.map((item) => item.count);
    }
  } else {
    marcas[0] = "Ganancias";
    marcas[1] = "Perdidas";
    numero[0] = data[0];
    numero[1] = data[1];
  }

  const [charData, setCharData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const delayedUpdate = setTimeout(() => {
      setCharData({
        labels: marcas,
        datasets: [
          {
            label: name,
            data: numero,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: [
              "rgb(53, 162, 235, 0.4)",
              "rgb(53, 16, 235, 0.4)",
              "rgb(53, 140, 235, 0.4)",
            ],
          },
        ],
      });
      setCharOptions({
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Dayli Revenue",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      });
    }, 1000); // Retraso de 1000ms (1 segundo)

    return () => clearTimeout(delayedUpdate);
  }, [data]);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg">
        <Bar options={charOptions} data={charData} />
      </div>
    </>
  );
}

export default BarChart;
