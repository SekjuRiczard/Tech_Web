import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { colors } from '@mui/material';
import App from '../App';
import Device_Id from './Device_Id';
import "../index.css"


interface Props {
    temperatureData: number[];
    humidityData: number[];
    pressureData: number[];
  }

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function Charts({ temperatureData, humidityData, pressureData }: Props) {
  return (
    
      <div className="chartStyle">
        <LineChart
          sx={{
            "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
              strokeWidth: "0.4",
              fill: "#ffffff",
              color:'white'
            },
            "& .MuiChartsAxis-bottom ": {
              strokeWidth: "0.5",
              fill: "#ffffff",
              color:'white'
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
              stroke: "#ffffff",
              strokeWidth: 0.4,
              color:'white'
              
            },
            "& .MuiChartsAxis-top .MuiChartsAxis-label": {
              color:'white',
             
            },
            "& .MuiChartsAxis-left .MuiChartsAxis-line": {
              stroke: "#ffffff",
              strokeWidth: 0.4,
              color:'white'
              
            },
            "& .MuiChartsAxis-right .MuiChartsAxis-line": {
              stroke: "#ffffff",
              strokeWidth: 0.4
              },
              "& .MuiChartsAxis-tickContainer ": {
              stroke: "#ffffff",
              strokeWidth: 0.4
              },
              "&  .MuiChartsAxis-tickLabel": {
                stroke: "#ffffff",
                strokeWidth: 0.4,
                color:'white',
                fill:'white'
              },
              "& .MuiChartsAxis-directionX .MuiChartsAxis-label": {
                stroke: "#ffffff",
                strokeWidth: 0.4,
                color:'white'
                
              },
              "& .MuiChartsAxis-tickLabel": {
                stroke: "#ffffff",
                strokeWidth: 0.4,
                color:'white',
                fill: "white"
              },
              "& .topAxis": {
                stroke: "#ffffff",
                strokeWidth: 0.4,
                color:'white',
                fill: "white"
              },

          }}
         
          series={[
            { data: temperatureData, label: 'temperature',  yAxisKey: 'leftAxisId',  },
            { data: humidityData, label: 'humidity', yAxisKey: 'rightAxisId' },
            { data: pressureData, label: 'pressure', yAxisKey: 'thirdAxisId' } 
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          yAxis={[
            { id: 'leftAxisId' },
            { id: 'rightAxisId' },
            { id: 'thirdAxisId' } 
          ]}
          rightAxis="rightAxisId"
        />
      </div>
 
  )
}
