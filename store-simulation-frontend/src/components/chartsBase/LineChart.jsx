import React from "react";
import { Line } from "react-chartjs-2";
import 'moment'

function LineChart({ chartData, options, title }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{title}</h2> 
      <Line
        data={chartData}
        options={options}
        // options={{
        //   plugins: {
        //     legend: {
        //       display: false
        //     }
        //   },
        //   scales: {
        //     y: {
        //       title: {
        //         display: true,
        //         text: 'Total de la Venta ($)'
        //       }
        //     },
        //     x: {
        //       type: 'time',
        //       time: {
        //         displayFormats: {
        //           day: 'DD-MM'
        //         }
        //       },
        //       title: {
        //         display: true,
        //         text: 'Fecha de la Venta'
        //       }
        //     }
        //   }
        // }}
      />
    </div>
  );
}
export default LineChart;