import 'chartjs-adapter-moment';
import { useState, useEffect } from "react";

import { Scatter } from "react-chartjs-2";
import moment from 'moment';

import getRandomColor from '../utils/chartsAux/inventoryChartColors';

function InventoryChart() {
  const [products, setProducts] = useState([])
  const [inventory, setInventory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchInventory = async() => {
      try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory`)
        .then((response) => response.json())
        .then((data) => {
          setInventory(data.inventory)
          setIsLoading(false)
        })
        .catch((err) => console.log(err.message))
      } catch (error) {
        console.log("Error al obtener el inventario", error)
      }
    }
    fetchInventory()
  }, [])

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/product`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products)
          setIsLoading(false)
        })
        .catch((err) => console.log(err.message))
      } catch (error) {
        console.log("Error al obtener los productos", error)
      }
    }
    fetchProducts()
  }, [])

  const names = []
  products.forEach((product) => {
    names.push(product.name)
  })

  let allInventory = []
  for (let index = 1; index < names.length + 1; index++) {
    const color = getRandomColor()
    const mapInventory = inventory.map((data) => {
      if (data.productID == index) {
        return {
          x: moment(data.updateDate, 'YYYY-MM-DD'),
          y: data.availableQuantity
        }
      }
    }).filter(el => el !== undefined)

    allInventory.push({
      label: `${names[index - 1]}`,
      data: mapInventory,
      backgroundColor: color,
      borderColor: color,
      showLine: true
    })
  }

  if (isLoading) {
    return <h2>Cargando inventario</h2>
  }
  
  const data = {
    datasets: allInventory
  }

  const options = {
    scales: {
        x: {
            type: 'time',
            time: {
              displayFormats: {
                day: 'DD-MM'
            }
            },
            title: {
                display: true,
                text: 'Fecha'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Cantidad en Inventario'
            }
        }
    }
  }

  const chartTitle = "Resumen del Inventario del 2do semestre de 2024"

  return(
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{chartTitle}</h2>
      <Scatter data={data} options={options} />
    </div>
  )
}

export default InventoryChart;