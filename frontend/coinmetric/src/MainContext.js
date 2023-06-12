import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const Context = createContext()


const MainContext = ({ children }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [watchListLoading, setWatchListLoading] = useState(true)
    const [listOfCoins, setListOfCoins] = useState([])
    const [marketCap, setMarketCap] = useState(0)
    const [marketCapChange, setMarketCapChange] = useState(0)
    const [user, setUser] = useState(null)
    const [watchListArray, setWatchListArray] = useState([])
    const watchArray = []

    async function isAuthorized() {
        await axios.get('https://coinmetricserver.onrender.com/isAuthorized', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setUser(res.data.user)
            // console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }
    async function fetchCryptoInfo() {
        await axios.get(`https://coinmetricserver.onrender.com/cryptoinfo`)
            .then((res) => {
                setListOfCoins(res.data.data)
                setLoaded(true)
            })
        await axios.get('https://coinmetricserver.onrender.com/infoline', {
        }).then((res) => {
            setMarketCap(res.data.data.quote.USD.total_market_cap.toFixed(1))
            setMarketCapChange(res.data.data.quote.USD.total_market_cap_yesterday_percentage_change.toFixed(2))
        })
    }
    async function getWatchList() {
        console.log(listOfCoins);
        console.log(!listOfCoins.length);
        if (!listOfCoins.length) {
            await fetchCryptoInfo()
        }
        console.log(listOfCoins);
        await axios.get('https://coinmetricserver.onrender.com/getWatchlist', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            console.log(res.data);
            setWatchListArray(findCoins(res.data, listOfCoins))
            setWatchListLoading(false)
        }).catch((err) => {
            console.log(err);
        });
    }
    const findCoins = (watchitems, cmcList) => {
        for (let i = 0; i < watchitems.watchlist.length; i++) {
            for (let j = 0; j < cmcList.length; j++) {
                if (cmcList[j].symbol === watchitems.watchlist[i].toUpperCase()) {
                    watchArray.push(cmcList[j])
                }
            }
        }
        console.log(watchArray);
        return watchArray
    }
    function logout() {
        localStorage.removeItem('token')
        isAuthorized()
    }
    return (<Context.Provider value={{
        user, setUser,
        isLoaded, setLoaded,
        listOfCoins, setListOfCoins,
        marketCap, setMarketCap,
        marketCapChange, setMarketCapChange,
        fetchCryptoInfo, isAuthorized,
        logout, getWatchList, watchListArray,
        watchListLoading
    }}>
        {children}
    </Context.Provider>)
}

export default MainContext
export const MainState = () => {
    return useContext(Context)
}