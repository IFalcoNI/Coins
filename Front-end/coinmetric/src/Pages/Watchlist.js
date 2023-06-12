import React, { useEffect } from 'react'
import { MainState } from '../MainContext'
import Coin from '../Components/Coin'
import './Styles/Watchlist/Watchlist.css'

export default function Watchlist() {
    const { getWatchList, watchListArray, watchListLoading } = MainState()
    
    useEffect(() => {
        getWatchList()
    }, [])
   

    return (<div className='Watchlist_Main'>
        <h1 className="Watchlist_Header">Watchlist</h1>
        {
            !watchListLoading ? <div className='Watchlist_Table'>{
                watchListArray ?
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th></th>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>1h%</th>
                                <th>24h%</th>
                                <th>7d%</th>
                                <th>Market Cap</th>
                                <th>Volume(24h)</th>
                                <th>
                                    Circulating Supply
                                </th>
                                {/* <th>
                            Last 7 Days
                        </th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {watchListArray.map((coin) => <Coin key={coin.id}
                                id={coin.cmc_rank}
                                coinid={coin.id} name={coin.name}
                                symbol={coin.symbol}
                                price={coin.quote.USD.price}
                                oneHourChange={coin.quote.USD.percent_change_1h}
                                dayChange={coin.quote.USD.percent_change_24h}
                                weekChange={coin.quote.USD.percent_change_7d}
                                marketCap={coin.quote.USD.market_cap}
                                volume={coin.quote.USD.volume_24h}
                                totalSupply={coin.circulating_supply}
                                maxSupply={coin.max_supply}></Coin>)}
                        </tbody>
                    </table>

                    : <div>nothing</div>
            }</div>
                : <div>Loading....</div>
        }
    </div>

    )
}
