import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import sales from "../utils/DummyData/dummySales";

import LineChart from '../components/LineChart'

Chart.register(CategoryScale);

function SaleChart() {
  const [chartData, setChartData] = useState({
    labels: sales.map((data) => {
      console.log(typeof data.salesDate)
      return data.salesDate.getDate()+"/"+(data.salesDate.getMonth()+1);
    }), 
    datasets: [
      {
        label: "Total de la venta",
        data: sales.map((data) => data.total),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }
    ]
  });

  return(
    <LineChart chartData={chartData} />
  )

}

export default SaleChart;