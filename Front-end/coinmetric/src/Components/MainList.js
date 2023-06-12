import React, { useState, useEffect } from 'react'
import Coin from './Coin'
import './Styles/MainList.css'
import { MainState } from '../MainContext'
import ReactPaginate from 'react-paginate';

import formatCompactNumber from '../helpers/compactNumbers'

export default function MainList() {
    const [limit, setLimit] = useState(100)
    const [searchCoin, setSearchCoin] = useState('')
    const { isLoaded, listOfCoins, marketCap, marketCapChange, fetchCryptoInfo, getWatchList} = MainState();

    useEffect(() => {
        fetchCryptoInfo()
        getWatchList()
    }, []);
    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchCoin.toLowerCase())
    })
    console.log(filteredCoins);

    function Items({ currentItems }) {
        return (
            <>
                {currentItems.map((coin) => {
                    return <Coin key={coin.id}
                        id={listOfCoins.indexOf(coin) + 1}
                        coinid={coin.id} name={coin.name}
                        symbol={coin.symbol}
                        price={coin.quote.USD.price}
                        oneHourChange={coin.quote.USD.percent_change_1h}
                        dayChange={coin.quote.USD.percent_change_24h}
                        weekChange={coin.quote.USD.percent_change_7d}
                        marketCap={coin.quote.USD.market_cap}
                        volume={coin.quote.USD.volume_24h}
                        totalSupply={coin.circulating_supply}
                        maxSupply={coin.max_supply}></Coin>
                })}
            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(filteredCoins);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(filteredCoins.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(filteredCoins.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % filteredCoins.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <div className='MainList'>
            <h2 className='MainList_Header'>Today's Cryptocurrency Prices by Market Cap</h2>
            <p>Total market cap is <span style={{ fontWeight: 'bold' }}>{formatCompactNumber(marketCap)}</span>, <span className={`Coin_Change_Hour ${marketCapChange >= 0 ? 'greenMarker' : 'redMarker'}`}>{marketCapChange}%</span> change over last day.</p>
            <div className='MainList_Options'>
                <div>
                    <span className='MainList_Limit_Text'>Limit </span>
                    <select className='MainList_Limit' value={limit} onChange={e => { setLimit(e.target.value) }}>
                        <option value="100">100</option>
                        <option value="50">50</option>
                        <option value="25">25</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <input placeholder='Search' className='MainList_Search' type="text" onChange={(e) => { setSearchCoin(e.target.value) }} />
            </div>


            {isLoaded ? <div className="CoinList">
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
                        <PaginatedItems itemsPerPage={limit} />,
                    </tbody>
                </table>
            </div> : <div>Loading...</div>}
        </div>
    )
}

