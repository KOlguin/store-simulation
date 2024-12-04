import moment from 'moment'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
// import sales from "../utils/DummyData/dummySales";

import LineChart from './chartsBase/LineChart'

Chart.register(CategoryScale);

const buildSales = (sales) => {
  let allSales = {
    labels: sales.map((data) => {
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

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Total de la Venta ($)'
        }
      },
      x: {
        type: 'time',
        time: {
          displayFormats: {
            day: 'DD-MM'
          }
        },
        title: {
          display: true,
          text: 'Fecha de la Venta'
        }
      }
    }
  }

  const chartTitle = "Resumen de las Ventas del 2do semestre de 2024"

  return { allSales, options, chartTitle }
}

function SaleChart() {
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

  const { allSales, options, chartTitle } = buildSales(sales)

  if (isLoading) {
    return <h2>Cargando las ventas</h2>
  }

  return(
    <LineChart chartData={allSales} options={options} title={chartTitle} />
  )

}

export default SaleChart;