import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import SingleCoinInfo from '../Components/SingleCoinInfo'
import './Styles/SingleCoin/SingleCoin.css'
export default function SingleCoin() {
    const { name } = useParams()
    const [coin, setCoin] = useState()
    useEffect(() => {
        // getGeckoInfo()
        getCoinData()
    }, [])
    async function getCoinData() {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${name}`).then(res => {
            setCoin(res.data);
            // console.log(res.data);
        })
        // console.log(coin);
    }


    return (
        <> {coin ?
            <div className="SingleCoin">
                <SideBar
                    id={coin.id}
                    image={coin.image}
                    name={coin.name}
                    description={coin.description.en}
                    // todaysHigh={coin.market_data.high_24h.usd}
                    symbol={coin.symbol}
                    price={coin.market_data.current_price.usd}
                    supply={coin.market_data.circulating_supply}
                    supplyTotal={coin.market_data.max_supply}
                    marketCap={coin.market_data.market_cap.usd} />
                <SingleCoinInfo name={coin.id} />
            </div>
            : <div>Loading...</div>
        }
        </>

    )
}
