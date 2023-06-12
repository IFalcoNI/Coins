import React, { useEffect } from 'react'
import './Styles/PortfolioCoin.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import favorite from './Styles/images/fav_inactive.png'
import favoriteActive from './Styles/images/fav_active.png'
import { useNavigate } from "react-router-dom";
import formatCompactNumber from '../helpers/compactNumbers'
import { MainState } from '../MainContext';


export default function PortfolioCoin({ id, coinid, name, symbol, price, dayChange, weekChange  }) {
    const currentPrice = (price * 0.98 + dayChange).toFixed(2)
    const Profit = ((1 - ((price * 0.98 + dayChange)) / price) * 100).toFixed(2)
    const navigate = useNavigate()
    const { watchListArray } = MainState()

    return (
        <tr className='PortfolioCoin'>
            <td onClick={() => navigate(`/coins/${name.toLowerCase()}`)} className='PortfolioCoin_Name_Field'>
                <img className='PortfolioCoin_Icon' src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinid}.png`} loading='lazy' alt="" />
                <div className='PortfolioCoin_Name'>{name}</div>
                <div className='PortfolioCoin_Symbol'>{symbol}</div>
            </td>
            <td>
                <div className='PortfolioCoin_Price'>{price >= 0.01 ? price.toFixed(2) : price.toFixed(6)}</div>
            </td>

            <td>
                <div className={`PortfolioCoin_Change_Day `}>{Math.abs(dayChange.toFixed(2))}</div>
            </td>
            <td>
                <div className={`PortfolioCoin_Change_Day `}>{coinid}</div>
            </td>
            <td>
                <div className={`PortfolioCoin_Change_Day `}><h4>{currentPrice}</h4></div>
            </td>
            <td>
                <div className={`PortfolioCoin_Change_Day ${weekChange <= 1 ? 'greenMarker' : 'redMarker'}`}>{Profit}%</div>
            </td>
            <td>
                <div className={`Actions `}>
                    <div>.</div>
                    <div>.</div>
                    <div>.</div>
                </div>
            </td>

        </tr>
    )
}
