import React from "react";
import { Doughnut } from "react-chartjs-2"
import './Styles/Allocation.css'
import "chartjs-plugin-datalabels";

const ETH = 1802.46 * 1027
const BTC = 25864.04 * 1
const BNB = 254.68 * 1839
const USDT = 825 * 1
const SUM = ETH+BTC+BNB+USDT
const ETHP = (ETH/SUM).toFixed(2)*100
const BTCP = (BTC / SUM).toFixed(2)*100
const BNBP = (BNB / SUM).toFixed(2)*100
const USDTP = (USDT / SUM).toFixed(2)*100
export const data = {
    labels: [
        `ETH | ${ETHP}`,
        `BTC | ${BTCP}`,
        `BNB | ${BNBP}`,
        `USDT | ${USDTP}`,
    ],
    datasets:
        [{ data: [ETH, BTC, BNB, USDT] }]
};

const options = {
    plugins: {
        legend: {
            position: 'right',
            rtl: true,
            labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
            }
        }
    },
}

export function Allocation() {
    return (
        <Doughnut className="Doughnut"
            data={data}
            options={options}
        />
    )
}
