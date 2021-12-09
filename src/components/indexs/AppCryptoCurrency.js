import { useEffect, useState } from 'react'
import axios from 'axios'
import './../../css/cryptocurrency.css'
import Coin from './../cryptocurrency-project/Coin'

const AppCryptoCurrency = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')
      .then((res) => {
        setCoins(res.data)
        console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filterCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="crypto-main-container">
      <div className="cripto-header">
        <h1 className="brand"><i className="fas fa-moon"></i>CoinMoon</h1>
        <form>
          <input className="input-field" type="text"
            placeholder="Search a Coin" onChange={handleChange} />
        </form>
      </div>
      <div className="coin-cointaner">
        {
          filterCoins.map((coin) => {
            return(
              <Coin
                key={coin.id}
                name={coin.name}
                current_price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                total_volume={coin.total_volume}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default AppCryptoCurrency
