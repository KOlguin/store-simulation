import {Chart} from 'chart.js'
import { Scatter } from "react-chartjs-2";

Chart.register(Scatter)

function ScatterChart(chartData) {
  const data = chartData.data
  const options = chartData.options
  const chartTitle = chartData.chartTitle

  return(
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{chartTitle}</h2>
      <Scatter data={data} options={options} />
    </div>
  )
}

export default ScatterChart