import React from 'react';
import './Chart.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Poker Cash Game Chart'
      }
    }
  };

  /*

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
*/
  const data = {
    //labels,
    labels: props.labels,
    datasets: [
      {
        label: 'Buy-In',
        //data: [10, 100],
        data: props.dataOne,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Cash Out',
        //data: [20, -200],
        data: props.dataTwo,
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  };

  return (
    <div className='barstyle'>
      <Bar options={options} data={data} />
    </div>
  );
}

export default Chart;
