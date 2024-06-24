import React, { useContext, useState, useEffect } from 'react';
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

export const Home = () => {

  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
        setDisplayCoin(allCoin);
    }
  }

  const clearInput = () => {
    setInput('');
    setDisplayCoin(allCoin);
  }

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
        return item.name.toLowerCase().trim().includes(input.toLowerCase().trim());
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin])

  return (
    <div className="home">
        <div className="hero">
            <h1>Welcome to the CryptoTracker App</h1>
            <p>Track cryptocurrency prices with ease!</p>
            <form onSubmit={searchHandler}>
                <div className="input-container">
                    <input onChange={inputHandler} value={input} type="text" placeholder="Search crypto.." required />
                    {input && <span className="clear-button" onClick={clearInput}>×</span>}
                </div>
                <datalist id="coinlist">{allCoin.map((item, index) => (<option key={index} value={item.name}/>))}</datalist>
                <button type="submit">Search</button>
            </form>
        </div>
        <div className="crypto-table-container">
            <div className='crypto-table'>
                <div className="crypto-table-header">
                    <p>№</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p style={{textAlign: "center"}}>24H Change</p>
                    <p className="market-cap">Market Cap</p>
                </div>
                <div className="crypto-content">
                {
                    displayCoin.map((item, index) => (
                        <Link to={`/crypto-tracker-react/coin/${item.id}`} className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt={item.name} />
                                <p>{item.name + " " + "(" + item.symbol + ")"}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString('en-US')}</p>
                            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                                {Math.floor(item.price_change_percentage_24h * 100) / 100}
                            </p>
                            <p className="market-cap">{currency.symbol} {item.market_cap.toLocaleString('en-US')}</p>
                        </Link>
                    ))
                }
                </div>
            </div>
        </div>
    </div>
  )
}
