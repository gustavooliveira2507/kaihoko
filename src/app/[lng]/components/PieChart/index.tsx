"use client"
import { IDashboardData } from '@/interfaces/dashboardData';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
/*
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
*/
interface IProps {
  data: IDashboardData[],
  title:string
  
}
export function PieChart({title, data }: IProps) { 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title
      },
    },
  };

  const labels = data.map((item) => item.label);
  const colors = data.map((item) => item.color);
  const borderColors = data.map((item) => item.border);  
  const dataReport = {
    labels:labels,
    datasets: [
      {
      label: title,
      data: data.map((item) => item.data),
      backgroundColor: colors,
      borderColor: borderColors,
      borderWidth: 1,
    }
    ]
  }
  return <Pie data={dataReport} options={options} />;
}
