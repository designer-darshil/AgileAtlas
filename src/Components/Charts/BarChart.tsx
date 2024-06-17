import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BarChart: React.FC = () => {
  const data = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    datasets: [
      {
        label: "Group 1",
        backgroundColor: "#FACC16",
        data: [12, 19, 3, 5, 16, 3, 15],
        barPercentage: 0.5,
        barThickness: 22,
        maxBarThickness: 22,
        minBarLength: 10,
      },
      {
        label: "Group 2",
        backgroundColor: "#FF784B",
        data: [12, 19, 3, 5, 16, 3, 15],
        barPercentage: 0.5,
        barThickness: 22,
        maxBarThickness: 22,
        minBarLength: 10,
      },
      {
        label: "Group 3",
        backgroundColor: "#4ADE80",
        data: [12, 19, 3, 5, 16, 3, 15],
        barPercentage: 0.5,
        barThickness: 22,
        maxBarThickness: 22,
        minBarLength: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
