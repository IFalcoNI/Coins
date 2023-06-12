import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from "chart.js";


import { Line } from "react-chartjs-2";
import './Styles/SingleCoinInfo.css'
import { MainState } from '../MainContext';
import SelectButton from './SelectButton';
import { chartDays } from '../config/ChartDays';

export default function SingleCoinInfo({ name }) {
    Chart.register(CategoryScale, LinearScale, PointElement, LineElement);
    const [chartData, setChartData] = useState()
    const [days, setDays] = useState(1)
    // const { } = MainState
    useEffect(() => {

        getCoinChart()
    }, [days])
    async function getCoinChart() {
        await axios.get(`https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days}`).then(res => {
            setChartData(res.data.prices);
            console.log(res.data.prices);
        })
        // console.log(coin);
    }
//     async function getCoinChart() {
//         await axios.get(`http://localhost:3003/cryptoinfochart`, {
//             headers: {
//                 Accept: 'application/json',
//                 Accept_Encoding: 'deflate, gzip'
//         }}).then(res => {
//                     setChartData(res.data.prices);
//                     console.log(res.data);
//                 }).catch(err => console.log(err))
//     // console.log(coin);
// }

return (
    <div className='Chart'>
        {chartData ?
            <>
                <Line className='Chart_Canvas'
                    data={{
                        labels: chartData.map((coin) => {
                            let date = new Date(coin[0]);
                            let time =
                                date.getHours() > 12
                                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    : `${date.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),

                        datasets: [
                            {
                                data: chartData.map((coin) => coin[1]),
                                label: `${name.toUpperCase()}`,
                                borderColor: "#fe9802",
                            },
                        ],
                    }}
                    options={{
                        elements: {
                            point: {
                                radius: 1,
                            },
                        },
                    }}
                />
                <div className='Chart_Buttons'>
                    {chartDays.map(day => (
                        <SelectButton
                            key={day.value}
                            onClick={() => {
                                setDays(day.value)
                                console.log(days)
                            }}
                            selected={day.value === days}
                        >
                            {day.label}
                        </SelectButton>
                    ))}
                </div>
            </>
            :
            <>Loading...</>

        }
    </div>
)
}
