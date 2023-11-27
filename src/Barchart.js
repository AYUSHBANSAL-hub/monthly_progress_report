import { CategoryScale, LinearScale } from "chart.js";
import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  CategoryScale,
);
const Barchart = ({Barchartdata}) => {
  let data = {
    labels: ["DBMS", "OS", "Networking", "OOPs"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(0, 119, 255, 0.6)",
        // borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        stack: 20,
        barThickness:"40",
        base:0,
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: "rgba(255,99,132,1)",
        data: Barchartdata,
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      display: false,
    },
    type: "bar",
    // scales: {
    //   xAxes: [
    //     {
    //       stacked: true,
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       stacked: true,
    //     },
    //   ],
    // }
    scales: {
        y:
          {
            min: 0,
            max: 30,
            stepSize: 5,
            grid: {
              display: false
           }
          },
        x:
          {
            grid: {
              display: false
           }
          },
      },
  };
  return <Bar data={data} width={null} height={null} options={options} />;
};

export default Barchart;
