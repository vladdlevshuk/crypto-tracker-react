import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

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
        <Link to={'/crypto-tracker-react'}>
            <img src={logo} alt="Logo" className="logo" />
        </Link>
        <ul>
            <Link to={'/crypto-tracker-react'}><li>Home</li></Link>
            <li>Soon..</li>
            <li>Soon..</li>
            <li>Soon..</li>
        </ul>
        <div className="nav-right">
            <select onChange = {currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="rub">RUB</option>
            </select>
            <button>Soon ..<img src={arrow_icon} alt="Sign up" /></button>
        </div>
    </div>
  )
}
