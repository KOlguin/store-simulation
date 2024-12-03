// import Chart from "chart.js/auto";
import 'moment'
// import { LinearScale } from 'chart.js';
import 'chartjs-adapter-moment';
// import { useState } from "react";
import inventory from "../utils/DummyData/dummyInventopry";

import { Scatter } from "react-chartjs-2";
import moment from 'moment';

function InventoryChart() {
  const data = {
    datasets: [
      {
        label: 'Scatter Dataset',
        data: inventory.map((data) => {
          if (data.productID == 1) {
            return {
              x: moment(data.updateDate, 'DD-MM-YYYY'),
              y: data.availableQuantity
            }
          }
        }).filter(el => el !== undefined),
        backgroundColor: 'rgba(75,192,192,1)',
        showLine: true
      },
      {
        label: 'Scatter Dataset 2',
        data: inventory.map((data) => {
          if (data.productID == 2) {
            return {
              x: moment(data.updateDate, 'DD-MM-YYYY'),
              y: data.availableQuantity
            }
          }
        }).filter(el => el !== undefined),
        backgroundColor: 'rgba(75,192,0,1)',
        showLine: true
      }
    ],
  };
  
  const options = {
      scales: {
          x: {
              type: 'time',
              time: {
                displayFormats: {
                  day: 'DD MM'
              }
              },
              title: {
                  display: true,
                  text: 'Date'
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