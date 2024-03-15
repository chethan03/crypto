import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import axios from 'axios'
import { Baseurl } from './baseUrl'
import { Load } from './Load'
import './Exchange.css'
import OurModal from './OurModal'
// import eth from '../eth.png';
export const Exchanges = () => {
    const[loading,setLoading]=useState(true)
    const[exchanges,setExchanges]=useState([])

     useEffect(()=>{
        const getExchangesData= async()=>{
            const {data} =await axios.get(`${Baseurl}/exchanges`)
            console.log(data)
            setExchanges(data)
            setLoading(false)
        }
        getExchangesData()
     },[])
  return (
    <>  

    {
        loading ? <Load/> : <>
        <Header/>
          <OurModal/>
               {
                exchanges.map((item,i)=>{
                    return(
                        <div key={i} className="ex-cards">
                        <div className="image">   
                        <img height={'80px'} src={item.image} alt="" />
                        </div>
                        
                        <div className="name">
                           {item.name}
        
                        </div>
        
                        <div className="price">
                            {item.trade_volume_24h_btc.toFixed(0)}
                        </div>
        
                        <div className="rank">
                            {item.trust_score_rank}
                        </div>
                        </div>  
                    )
                })
               }
             
        </>
    }
    </>
  )
}
