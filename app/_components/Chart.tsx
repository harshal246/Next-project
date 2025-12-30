"use client"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { productszu } from "../_store/data";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export function LineChart() {
const getProductsData=productszu((state)=>(state.getProductsData))
const {products,stocks,reservedStocks}=getProductsData()

  const data = {
    labels: products,
    datasets: [
      {
        label: "Products",
        data: products,
        borderColor: "#A78BFA", 
        backgroundColor: "#A78BFA",
        tension: 0.4, 
        fill: true,
        pointRadius: 2,
      },
      {
        label: "Stocks",
        data: stocks,
        borderColor: "#49B543", 
        backgroundColor: "#49B543",
        tension: 0.5, 
        fill: true,
        pointRadius: 2,
      },
      {
        label: "Reserved stocks",
        data: reservedStocks,
        borderColor: "#AC43B5", 
        backgroundColor: "#AC43B5",
        tension: 0.6, 
        fill: true,
        pointRadius: 2,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
    x:{
        grid:{
            display:false
        }
    },
      y: {
        
        beginAtZero: true,
        grid:{
            display:false
        }
      },
    },
  };

  return <Line data={data} options={options} />;
}