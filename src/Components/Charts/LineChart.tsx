import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const generateRandomNumbers = (count: number, min: number, max: number) => {
  const randomNumbers = [];
  for (let i = 0; i < count; i++) {
    randomNumbers.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return randomNumbers;
};
const labels = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LineChart: React.FC = () => {
  const data = {
    type: "line",
    labels: labels,
    datasets: [
      {
        label: "Group 1",
        borderColor: "#FACC16", // Transparent background for line
        data: generateRandomNumbers(labels.length, 1, 20),
      },
      {
        label: "Group 2",
        borderColor: "#FF784B", // Transparent background for line
        data: generateRandomNumbers(labels.length, 1, 20),
      },
      {
        label: "Group 3",
        backgroundColor: "#4ADE80", // Transparent background for line
        data: generateRandomNumbers(labels.length, 1, 20),
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
