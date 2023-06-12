import React, { useEffect } from 'react'
import './Styles/Coin.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import favorite from './Styles/images/fav_inactive.png'
import favoriteActive from './Styles/images/fav_active.png'
import { useNavigate } from "react-router-dom";
import formatCompactNumber from '../helpers/compactNumbers'
import { MainState } from '../MainContext';


export default function Coin({ id, coinid, name, symbol, price, oneHourChange, dayChange, weekChange, marketCap, volume, totalSupply, maxSupply }) {
    const navigate = useNavigate()
    const { watchListArray } = MainState()

    return (
        <tr className='Coin'>
            <td>
                <div className="Coin_Fav">
                    {
                        watchListArray.find((coin) => coin.symbol === symbol) ?
                            <img src={favoriteActive} alt="" /> : <img src={favorite} alt="" />

                    }
                </div>
            </td>
            <td>
                <div className='Coin_Id'>{id}</div>
            </td>
            <td onClick={() => navigate(`/coins/${name.toLowerCase()}`)} className='Coin_Name_Field'>
                <img className='Coin_Icon' src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinid}.png`} loading='lazy' alt="" />
                <div className='Coin_Name'>{name}</div>
                <div className='Coin_Symbol'>{symbol}</div>
            </td>
            <td>
                <div className='Coin_Price'>{price >= 0.01 ? price.toFixed(2) : price.toFixed(6)}</div>
            </td>
            <td>
                <div className={`Coin_Change_Hour ${weekChange >= 0 ? 'greenMarker' : 'redMarker'}`}>{Math.abs(oneHourChange.toFixed(2))}</div>
            </td>
            <td>
                <div className={`Coin_Change_Day ${weekChange >= 0 ? 'greenMarker' : 'redMarker'}`}>{Math.abs(dayChange.toFixed(2))}</div>
            </td>
            <td>
                <div className={`Coin_Change_Week ${weekChange >= 0 ? 'greenMarker' : 'redMarker'}`}>
                    {Math.abs(weekChange.toFixed(2))}</div>
            </td>
            <td>
                <div className="Coin_MarketCap">{formatCompactNumber(marketCap)}</div>
            </td>
            <td>
                <div className="Coin_Volume_Day">{formatCompactNumber(volume)}</div>
            </td>
            <td>
                <div className="Supply">
                    <div className='Coin_Total'>{formatCompactNumber(totalSupply)}</div>
                    {/* <div className='Coin_Max'>{maxSupply}</div></div> */}
                    <div className='Coin_Circulattion'>{
                        maxSupply ?
                            <Progress theme={{
                                success: {
                                    symbol: '‍ ',
                                    color: 'rgb(48, 210, 12)'
                                },
                                active: {
                                    symbol: ' ',
                                    color: 'var(--main-bg)'
                                },
                                default: {
                                    symbol: ' ',
                                    color: 'var(--main-bg)'
                                }
                            }}
                                percent={Math.floor(100 * totalSupply / maxSupply)} />
                            : null}
                    </div>
                </div>

            </td>
        </tr>
    )
}
