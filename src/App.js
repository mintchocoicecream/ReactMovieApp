import {useState, useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState("default");
  const [coins, setCoins] = useState([]);

  const onSelect = (event) => {
    setIndex(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then( (json) => {
      setCoins(json);
      setLoading(false);
    });
  }, [])

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})` } </h1>
      {loading ? ( 
        <strong>Loading...</strong>
      ) : (

        <select value={index} onChange={onSelect}>
          <option value = "default">Select your units</option>
          {coins.map((coin) => ( 
          <option>
            {coin.name} ({coin.symbol}): ${(coin.quotes.USD.price).toFixed(2)} USD
          </option>
          ))}
        </select>
      )}
      
    </div>
  );
}

export default App;