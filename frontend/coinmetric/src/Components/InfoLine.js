import React, { useState, useEffect } from 'react'
import './Styles/Infoline.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MainState } from '../MainContext'

import formatCompactNumber from '../helpers/compactNumbers'

export default function InfoLine({ toggleTheme }) {
    const { user, logout } = MainState()
    const [cryptos, setCryptos] = useState(0)
    const [exchanges, setExchanges] = useState(0)
    const [btcDominance, setBtcDominance] = useState(0)
    const [ethDominance, setEthDominance] = useState(0)
    const [marketCap, setMarketCap] = useState(0)
    const [volumeDay, setVolumeDay] = useState(0)
    const [gasPrice, setGasPrice] = useState(0)

    useEffect(() => {
        axios.get(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=5JNX3CCGPP32G35AU3EHGN63U4T46R67P1`)
            .then((res) => {
                setGasPrice(res.data.result.ProposeGasPrice ? res.data.result.ProposeGasPrice : 'API ERROR');
            })
    }, [])
    useEffect(() => {
        axios.get('https://coinmetricserver.onrender.com/infoline', {
        }).then((res) => {
            // console.log(res.data.data);
            setCryptos(res.data.data.total_cryptocurrencies)
            setExchanges(res.data.data.active_exchanges)
            setBtcDominance(res.data.data.btc_dominance.toFixed(1))
            setEthDominance(res.data.data.eth_dominance.toFixed(1))
            setMarketCap(res.data.data.quote.USD.total_market_cap.toFixed(1))
            setVolumeDay(res.data.data.quote.USD.total_volume_24h.toFixed(1))
            // setMarketCap(res.data.active_cryptocurrencies)
            // setMarketCap(res.data.active_cryptocurrencies)
        })
    }, []);

    const [icon, setIcon] = useState(true)

    return (
        <div className='Infoline'>
            <div className="Infoline_Main">
                <ul>
                    <li>Cryptos: <span>{cryptos}</span></li>
                    <li>Exchanges: <span>{exchanges}</span></li>
                    <li>Market Cap: <span>{formatCompactNumber(marketCap)} $USD</span></li>
                    <li>24h Vol: <span>{formatCompactNumber(volumeDay)} $USD</span></li>
                    <li>Dominance: <span>BTC: {btcDominance}% ETH: {ethDominance}%</span></li>
                    <li>ETH Gas: <span>{gasPrice}</span></li>
                </ul>
                <div className="Infoline_Menu">
                    {/* <div className="Launguage">English</div> */}
                    <button className='changeTheme' onClick={() => { toggleTheme(); setIcon(!icon) }}>
                        {icon ? <svg viewBox="0 0 24 24" fill="none">
                            <path d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" fill="#000000" />
                        </svg> :
                            <svg fill="#fff" viewBox="0 0 207.628 207.628">
                                <circle cx="103.814" cy="103.814" r="45.868" />
                                <path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368  S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368  s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z" />
                                <path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385  C111.314,36.027,107.956,39.385,103.814,39.385z" />
                                <path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385  C111.314,204.271,107.956,207.628,103.814,207.628z" />
                                <path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5  S204.271,111.314,200.128,111.314z" />
                                <path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5  S36.027,111.314,31.885,111.314z" />
                                <path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242  c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z" />
                                <path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243  c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z  " />
                                <path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606  c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606  C175.757,178.687,173.838,179.419,171.918,179.419z" />
                                <path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606  c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z" />
                            </svg>
                        }
                    </button>
                    <div>
                        {user ?
                            <div className="Infoline_User">
                                <div className='User_Name'>{user.username}</div>
                                <button className="Logout" onClick={logout}>Logout</button>
                            </div>
                            :
                            <div className='Infoline_Sign'>
                                <Link className='Infoline_SignIn' to={'/SignIn'}>Login</Link>
                                <Link className='Infoline_SignUp' to={'/SignUp'}>Register</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
