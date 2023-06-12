import React from 'react'
import './Styles/Header.css'
import Logo from './Styles/images/logo.png'
import favoriteBtn from './Styles/images/fav_active.png'
import portfolio from './Styles/images/portfolio.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="Header_Main">
        <div className="Header_Pages">
          <Link to='/' className="Logo"><img src={Logo} alt="Logo" />CoinMetric</Link>
        </div>
        <div className="Header_Info">
          <Link to='/watchlist' className="Watchlist"><img src={favoriteBtn} alt='favorite' /> Watchlist</Link>
          <Link to='/portfolio' className="Portfolio"><img src={portfolio} alt='portfolio' /> Portfolio</Link>
        </div>
      </div>
    </header>
  )
}
