import moment from 'moment'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
// import sales from "../utils/DummyData/dummySales";

import LineChart from '../components/LineChart'

Chart.register(CategoryScale);

function SaleChart() {
  // const [chartData, setChartData] = useState({
  //   labels: sales.map((data) => {
  //     return data.salesDate.getDate()+"/"+(data.salesDate.getMonth()+1);
  //   }), 
  //   datasets: [
  //     {
  //       label: "Total de la venta",
  //       data: sales.map((data) => data.total),
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //       tension: 0.1,
  //     }
  //   ]
  // });
  const [sales, setSales] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSales = async() => {
      try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/sale`)
        .then((response) => response.json())
        .then((data) => {
          setSales(data.sales)
          setIsLoading(false)
        })
        .catch((err) => console.log(err.message))
      } catch (error) {
        console.log("Error al obtener las ventas", error)
      }
    }
    fetchSales()
  }, [])

  let allSales = {
      labels: sales.map((data) => {
        // return data.salesDate.getDate()+"/"+(data.salesDate.getMonth()+1);
        return moment(data.salesDate, 'YYYY-MM-DD')
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
    }
  

  if (isLoading) {
    return <h2>Cargando las ventas</h2>
  }

  return(
    <LineChart chartData={allSales} />
  )

}

export default SaleChart;