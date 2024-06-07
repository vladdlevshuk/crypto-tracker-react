import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

export const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "rub": {
        setCurrency({name: "rub", symbol: "₽"})
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Picing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange = {currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}
