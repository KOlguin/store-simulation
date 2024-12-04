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
      />
    </div>
  );
}
export default LineChart;