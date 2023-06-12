import React from 'react'
import parse from 'html-react-parser';
import axios from 'axios'

import './Styles/SideBar.css'
import MainContext, { MainState } from '../MainContext';

export default function SideBar({ image, name, description, symbol, price, supply, supplyTotal, marketCap }) {
    const { user } = MainState()
    async function addToWatchList() {
        await axios.put('/addtowatchlist', { coin: symbol }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
            // coin: { symbol }
        }).then((res) => {
            console.log(res.data);
            // setWatchitems(res.data)
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className='SideBar'>
            <div className="SideBar_Info"> <img className="SideBar_Coin_Image" src={`${image.large}`} alt='coin' loading='lazy' />
                <h2 className="SideBar_Coin_Name">{name}</h2>
                <p className="SideBar_Coin_Description">{parse(description.split('. ')[0])}.</p></div>
            <div className="SideBar_Metric">
                <h3 className="SideBar_Metric_Info">Metrics</h3>
                <p className="SideBar_Metric_Info_Field">Symbol: <span className='info'>{symbol.toUpperCase()}</span></p>
                <p className="SideBar_Metric_Info_Field">Price: <span>{price}</span></p>
                <p className="SideBar_Metric_Info_Field">Supply: <span>{supply}</span></p>
                <p className="SideBar_Metric_Info_Field">Total supply: <span>{supplyTotal}</span></p>
                <p className="SideBar_Metric_Info_Field">Market Cap: <span>{marketCap}</span> $USD</p>
                {user ? <button className='SideBar_AddToWathlist' onClick={addToWatchList}>Add to watchlist</button> : null}
            </div>
        </div>
    )
}
