import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineGraph = ({ dataObject1, dataObject2 }) => {
  console.log(dataObject1,dataObject2);
  // Extracting keys and values for the first dataset
  const labels1 = Object.keys(dataObject1);
  const values1 = Object.values(dataObject1);

  // Extracting keys and values for the second dataset
  const labels2 = Object.keys(dataObject2);
  const values2 = Object.values(dataObject2);

  // Assuming both objects have the same keys (labels)
  const labels = labels1;

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: values1,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Dataset 2',
        data: values2,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      }
    ]
  };

  return <Line data={data} />;
};

export default LineGraph;
