import React from 'react'
import PortfolioCoin from '../Components/PortfolioCoin'
import './Styles/Portfolio/Portfolio.css'
import { Allocation } from '../Components/Allocation';


export default function Portfolio() {
    const portfolioListLoading = false
    const portfolioListArray = [
        {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "num_market_pairs": 10243,
            "date_added": "2010-07-13T00:00:00.000Z",
            "tags": [
                "mineable",
                "pow",
                "sha-256",
                "store-of-value",
                "state-channel",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "galaxy-digital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio",
                "bitcoin-ecosystem"
            ],
            "max_supply": 21000000,
            "circulating_supply": 19395987,
            "total_supply": 19395987,
            "infinite_supply": false,
            "platform": null,
            "cmc_rank": 1,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-06-08T10:02:00.000Z",
            "quote": {
                "USD": {
                    "price": 26391.976992192645,
                    "volume_24h": 16398044245.548027,
                    "volume_change_24h": -33.3348,
                    "percent_change_1h": -0.16747481,
                    "percent_change_24h": -0.09909045,
                    "percent_change_7d": -1.94882219,
                    "percent_change_30d": -4.36445781,
                    "percent_change_60d": -5.45617007,
                    "percent_change_90d": 32.81264789,
                    "market_cap": 511898442644.8677,
                    "market_cap_dominance": 46.5322,
                    "fully_diluted_market_cap": 554231516836.05,
                    "tvl": null,
                    "last_updated": "2023-06-08T10:02:00.000Z"
                }
            }
        },
        {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "num_market_pairs": 6980,
            "date_added": "2015-08-07T00:00:00.000Z",
            "tags": [
                "pos",
                "smart-contracts",
                "ethereum-ecosystem",
                "coinbase-ventures-portfolio",
                "three-arrows-capital-portfolio",
                "polychain-capital-portfolio",
                "binance-labs-portfolio",
                "blockchain-capital-portfolio",
                "boostvc-portfolio",
                "cms-holdings-portfolio",
                "dcg-portfolio",
                "dragonfly-capital-portfolio",
                "electric-capital-portfolio",
                "fabric-ventures-portfolio",
                "framework-ventures-portfolio",
                "hashkey-capital-portfolio",
                "kenetic-capital-portfolio",
                "huobi-capital-portfolio",
                "alameda-research-portfolio",
                "a16z-portfolio",
                "1confirmation-portfolio",
                "winklevoss-capital-portfolio",
                "usv-portfolio",
                "placeholder-ventures-portfolio",
                "pantera-capital-portfolio",
                "multicoin-capital-portfolio",
                "paradigm-portfolio",
                "injective-ecosystem",
                "layer-1"
            ],
            "max_supply": null,
            "circulating_supply": 120230938.87600881,
            "total_supply": 120230938.87600881,
            "infinite_supply": true,
            "platform": null,
            "cmc_rank": 2,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-06-08T10:02:00.000Z",
            "quote": {
                "USD": {
                    "price": 1839.6799010162454,
                    "volume_24h": 6840143550.130575,
                    "volume_change_24h": -29.585,
                    "percent_change_1h": -0.06652229,
                    "percent_change_24h": -0.42340593,
                    "percent_change_7d": -1.22211491,
                    "percent_change_30d": -0.05893405,
                    "percent_change_60d": 0.13349234,
                    "percent_change_90d": 31.51062764,
                    "market_cap": 221186441730.50613,
                    "market_cap_dominance": 20.11,
                    "fully_diluted_market_cap": 221186441730.51,
                    "tvl": null,
                    "last_updated": "2023-06-08T10:02:00.000Z"
                }
            }
        },
        {
            "id": 1839,
            "name": "BNB",
            "symbol": "BNB",
            "slug": "bnb",
            "num_market_pairs": 1452,
            "date_added": "2017-07-25T00:00:00.000Z",
            "tags": [
                "marketplace",
                "centralized-exchange",
                "payments",
                "smart-contracts",
                "alameda-research-portfolio",
                "multicoin-capital-portfolio",
                "bnb-chain",
                "layer-1"
            ],
            "max_supply": null,
            "circulating_supply": 155855011.69373623,
            "total_supply": 155855011.69373623,
            "infinite_supply": false,
            "platform": null,
            "cmc_rank": 4,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-06-09T06:36:00.000Z",
            "quote": {
                "USD": {
                    "price": 259.7471923663849,
                    "volume_24h": 546516007.1941833,
                    "volume_change_24h": -44.0581,
                    "percent_change_1h": -0.28868874,
                    "percent_change_24h": 0.12296247,
                    "percent_change_7d": -15.74254479,
                    "percent_change_30d": -16.861154,
                    "percent_change_60d": -16.98708439,
                    "percent_change_90d": -6.70423914,
                    "market_cap": 40482901703.67808,
                    "market_cap_dominance": 3.6695,
                    "fully_diluted_market_cap": 40482901703.68,
                    "tvl": null,
                    "last_updated": "2023-06-09T06:36:00.000Z"
                }
            }
        },
        {
            "id": 825,
            "name": "Tether",
            "symbol": "USDT",
            "slug": "tether",
            "num_market_pairs": 55236,
            "date_added": "2015-02-25T00:00:00.000Z",
            "tags": [
                "payments",
                "stablecoin",
                "asset-backed-stablecoin",
                "avalanche-ecosystem",
                "solana-ecosystem",
                "arbitrum-ecosytem",
                "moonriver-ecosystem",
                "injective-ecosystem",
                "bnb-chain",
                "usd-stablecoin",
                "optimism-ecosystem"
            ],
            "max_supply": null,
            "circulating_supply": 83321599071.57214,
            "total_supply": 86086529362.37724,
            "platform": {
                "id": 1027,
                "name": "Ethereum",
                "symbol": "ETH",
                "slug": "ethereum",
                "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
            },
            "infinite_supply": true,
            "cmc_rank": 3,
            "self_reported_circulating_supply": null,
            "self_reported_market_cap": null,
            "tvl_ratio": null,
            "last_updated": "2023-06-09T06:36:00.000Z",
            "quote": {
                "USD": {
                    "price": 1.0000901437204441,
                    "volume_24h": 18137669517.29759,
                    "volume_change_24h": -29.6171,
                    "percent_change_1h": -0.00087072,
                    "percent_change_24h": 0.01098121,
                    "percent_change_7d": -0.02234774,
                    "percent_change_30d": -0.03418201,
                    "percent_change_60d": -0.0645943,
                    "percent_change_90d": -0.36858868,
                    "market_cap": 83329109990.50581,
                    "market_cap_dominance": 7.556,
                    "fully_diluted_market_cap": 86094289522.41,
                    "tvl": null,
                    "last_updated": "2023-06-09T06:36:00.000Z"
                }
            }
        }

    ]
    const ETH = 1802.46 * 1027
    const BTC = 25864.04 * 1
    const BNB = 254.68 * 1839
    const USDT = 825 * 1
    const SUM = ETH + BTC + BNB + USDT
    return (
        <div className="Portfolio_Main">
            <h1>Portfolio</h1>

            <div className="Portfolio_Components">
                <div className="Portfolio_Performance">
                    <div className="Allocation_Header">
                        <h3>Allocation</h3>
                        <div className="Net_Worth">
                            <h3>Net Worth</h3>
                            <span>{SUM}$</span>
                        </div>
                    </div>
                    <Allocation className="Allocation" />
                </div>
                <div className="Coins_Table">
                    {
                        !portfolioListLoading ? <div className='Portfolio_Coins_Table'>{
                            portfolioListArray ?
                                <table cellSpacing="5" cellPadding="5">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>24h%</th>
                                            <th>Holdings</th>
                                            <th>Avg. Buy Price</th>
                                            <th>
                                                Profit/Loss
                                            </th>
                                            <th>
                                                Actions
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>

                                        {portfolioListArray.map((coin) => <PortfolioCoin key={coin.id}
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
                                            maxSupply={coin.max_supply}>

                                        </PortfolioCoin>)}
                                    </tbody>
                                </table>

                                : <div>nothing</div>
                        }</div>
                            : <div>Loading....</div>
                    }
                </div>
            </div>

        </div>
    )
}
