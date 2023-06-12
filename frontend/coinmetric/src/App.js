import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Styles/App.css';
import Home from './Pages/Home';
import SingleCoin from './Pages/SingleCoin';
import Header from './Components/Header.js'
import InfoLine from './Components/InfoLine.js'
import axios from 'axios'
import { MainState } from './MainContext';
import Watchlist from './Pages/Watchlist';
import Portfolio from './Pages/Portfolio';
import Footer from './Components/Footer';

function App() {
  const { user, isAuthorized, getWatchList, fetchCryptoInfo } = MainState();

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    isAuthorized()
  }, [])
  const refreshToken = async () => {
    try {
      const res = await axios.post('refreshAccess', { token: user.refreshToken })
    } catch (error) {

    }
  }
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <InfoLine toggleTheme={toggleTheme} />
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='coins/:name' element={<SingleCoin />}></Route>
          <Route path='watchlist' element={<Watchlist />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
