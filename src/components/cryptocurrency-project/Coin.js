import './../../css/cryptocurrency.css'

const Coin = ({name, current_price, symbol, marketcap, total_volume, image, priceChange}) => {
  return(
    <div className="crypto-coin">
      <img src={image} alt={`${name}`} className="coin-logo" />
        <div className="coin-name-wrap">
          <h1 className="coin-name">{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <p className="coin-price">${current_price.toLocaleString()}</p>
        <p className="coin-marke-cap">Market Cap: ${marketcap.toLocaleString()}</p>
        <p className="coin-volume">Volume (24H): ${total_volume.toLocaleString()}</p>
        {priceChange < 0 ? (
          <div className="price-container price-down">
            <i className="fas fa-angle-down fa-2x"></i>
            <p className="price-change">{priceChange.toFixed(2)}%</p>
          </div>
        ) : (
          <div className="price-container price-up">
            <i className="fas fa-angle-up fa-2x"></i>
            <p className="price-change">{priceChange.toFixed(2)}%</p>
          </div>
        )}
    </div>
  )
}

export default Coin
