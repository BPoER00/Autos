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

function BarChart() {
  const [charData, setCharData] = useState({
    datasets: [],
  });

  const [charOptions, setCharOptions] = useState({});

  useEffect(() => {
    setCharData({
      labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "sales $",
          data: [18008, 22008, 19008, 17008, 24008, 17008, 22008],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235, 0.4)",
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
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg">
        <Bar data={charData} options={charOptions} />
      </div>
    </>
  );
}

export default BarChart;
