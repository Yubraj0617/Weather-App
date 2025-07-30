import React from 'react'
import Chart from '../Component/chart'
export default function ChartDetail({forecast}) {
  return (
    <div>
      <Chart forecast={forecast} topic="Temperature" datakey="temperature" dataunit="°C" />
      <Chart forecast={forecast} topic="Wind" datakey="wind" dataunit="m/s" />
      <Chart forecast={forecast} topic="Humidity" datakey="humidity" dataunit="%" />
    </div>
  )
}
