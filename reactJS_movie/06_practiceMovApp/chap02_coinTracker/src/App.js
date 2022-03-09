import {useEffect, useState} from "react";

function App() {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
        // .then ((json)  => console.log(json));
            .then ((json)  => {
                    setCoins(json);
                    setLoading(false);
                });
    }, []);

  return (

    <div>
        <h1> The  Coooooins!!  {loading ? "" : `coinsLength: ${coins.length}` }</h1>
        {loading ? <strong> loading ...... </strong> :

            // <ul>
            //     {coins.map((coin) =>
            //         <li>
            //             {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            //         </li>
            //     )}
            // </ul>

            <select>
                {coins.map((coin) =>
                    <option>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                )}
            </select>

        }


    </div>

  );
}

export default App;
