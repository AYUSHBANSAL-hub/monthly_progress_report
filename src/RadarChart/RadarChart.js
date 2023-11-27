import { RadialLinearScale } from "chart.js";
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  BarController,
BarElement
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  BarController,
BarElement
);
// import { Chart as ChartJS,PointElement,LineElement} from 'chart.js';
// ChartJS.register(RadialLinearScale,PointElement,LineElement);

const RadarChart = ({radarData}) => {
  const data = {
    labels: ["DSA", "Communication", "System Design", "Psychometric", "CS fundamentals"],
    datasets: [
      {
        label: "Detailed Analysis",
        backgroundColor: "rgba(0, 119, 255, 0.5)",
        borderColor: "#0077ff",
        data: radarData,
      },
    ],
  };
  return (
    <div style={{height:"380px",display:"flex",justifyContent:"center", fontSize:"20px"}}>
      <Radar data={data} />
    </div>
  );
};

export default RadarChart;
