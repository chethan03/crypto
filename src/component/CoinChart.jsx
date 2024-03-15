import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Baseurl } from './baseUrl'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Load } from './Load';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



const CoinChart = ({currency}) => {
    const [chartData,setChartData]=useState([])
    const {id}= useParams()
    // const [currency,setCurrency]=useState('inr')
    const [days,setDays]=useState(1)
    const CoinChartData=async()=>{
   try {
    const {data} =await axios.get(`${Baseurl}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
    // console.log(data.prices)
    setChartData(data.prices)
    
   } catch (error) {
    console.log(error)
   }
    }

useEffect(()=>{
    CoinChartData()
},[currency,id,days])

const myData={
    labels:chartData.map((value)=>{
        const date = new Date(value[0])
        // console.log(date)
        const time =
        date.getHours() > 12
        ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
        : `${date.getHours()} : ${date.getMinutes()} AM`
        return days=== 1 ? time: date.toLocaleDateString()
    }),
datasets:[
    {
        label:`Price in Past Days ${days} in ${currency}`,
        data : chartData.map((value)=>value[1]),
        borderColor:'Orange',
        borderWidth : '3'
    }
]
}

  return (
   <>
   {
    chartData.length === 0 ? ( <Load/> ):(
        <div>
        <Line data={myData}  options={{
          elements:{
              point:{
                  radius: 1,
              }
          }
        }} style={{marginTop:"5rem",width:'60rem'}}/>
  
            <div className="btn" style={{marginTop:'20px'}}>
                <button onClick={()=>setDays(1)}>24 hours</button>
                <button onClick={()=>setDays(30)}>1 Month</button>
                <button onClick={()=>setDays(365)}>1 Year</button>
            </div>
  
      </div>    
    )
   }
   </>
  )
}

export default CoinChart;