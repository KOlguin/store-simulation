import 'chartjs-adapter-moment';
import { useState, useEffect } from "react";
// import inventory from "../utils/DummyData/dummyInventopry";

import { Scatter } from "react-chartjs-2";
import moment from 'moment';

function InventoryChart() {
  // // const [products, setProducts] = useState([])
  const [inventory, setInventory] = useState([])
  const [isLoading, setIsLoadnig] = useState(true)

  // useEffect(() => {
  //   const fetchProducts = async() => {
  //     try {
  //       await fetch(`${process.env.VITE_BACKEND_URL}/product/getProducts`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data)
  //       })
  //       .catch((err) => console.log(err.message))
  //     } catch (error) {
  //       console.log("Error al obtener los productos")
  //     }
  //   }
  //   fetchProducts
  // }, [])

  useEffect(() => {
    const fetchInventory = async() => {
      try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/inventory`)
        .then((response) => response.json())
        .then((data) => {
          setInventory(data.inventory)
          setIsLoadnig(false)
        })
        .catch((err) => console.log(err.message))
      } catch (error) {
        console.log("Error al obtener el inventario", error)
      }
    }
    fetchInventory()
  }, [])

  

  let allInventory = []
  for (let index = 1; index < 6; index++) {
    const mapInventory = inventory.map((data) => {
      // console.log(data)
      if (data.productID == index) {
        return {
          x: moment(data.updateDate, 'YYYY-MM-DD'),
          y: data.availableQuantity
        }
      }
    }).filter(el => el !== undefined)

    allInventory.push({
      label: `Producto ${index}`,
      data: mapInventory,
      backgroundColor: `rgba(75, 192, ${index}, 1)`,
      showLine: true
    })
  }

  // console.log(allInventory)

  // if (allInventory.length > 0) {
  //   setIsLoadnig(false)
  // }

  if (isLoading) {
    return <h1>Cargando inventario</h1>
  }
  // const data = {
  //   datasets: [
  //     {
  //       label: 'Scatter Dataset',
  //       data: inventory.map((data) => {
  //         if (data.productID == 1) {
  //           return {
  //             x: moment(data.updateDate, 'DD-MM-YYYY'),
  //             y: data.availableQuantity
  //           }
  //         }
  //       }).filter(el => el !== undefined),
  //       backgroundColor: 'rgba(75,192,192,1)',
  //       showLine: true
  //     },
  //     {
  //       label: 'Scatter Dataset 2',
  //       data: inventory.map((data) => {
  //         if (data.productID == 2) {
  //           return {
  //             x: moment(data.updateDate, 'DD-MM-YYYY'),
  //             y: data.availableQuantity
  //           }
  //         }
  //       }).filter(el => el !== undefined),
  //       backgroundColor: 'rgba(75,192,0,1)',
  //       showLine: true
  //     }
  //   ],
  // };
  const data = {
    datasets: allInventory
  }
  
  console.log(allInventory)
  
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

  return <Scatter data={data} options={options} />;
}

export default InventoryChart;