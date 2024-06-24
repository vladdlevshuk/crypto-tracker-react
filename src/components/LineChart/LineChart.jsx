import React,{ useState, useEffect } from 'react'
import { Chart } from 'react-google-charts'

export const LineChart = ({historicalData}) => {

  const [data, setData] = useState(["Date", "Prices"])

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.forEach((item) => {
        const date = new Date(item[0]);
        dataCopy.push([date.toLocaleDateString().slice(0,-5), item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <Chart
        chartType='LineChart'
        data={(data)}
        height='100%'
        legendToggle
    />
  )
}

export default LineChart