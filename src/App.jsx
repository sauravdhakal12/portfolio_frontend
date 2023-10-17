import { useState } from "react";
import InputField from "./components/input_field"
import RenderStock from "./components/render_stock"

const App = () => {
  const [stockTickerSymbol, setStockTickerSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [getGlobal, setGlobal] = useState([
    {
      "id": 1,
      "tickerSymbol": "NABIL",
      "quantity": 12,
      "price": "780",
    },
    {
      "id": 2,
      "tickerSymbol": "NICA",
      "quantity": 20,
      "price": "680",
    },
    {
      "id": 3,
      "tickerSymbol": "API",
      "quantity": 40,
      "price": "269",
    }
  ]);

  return (
    <div>
      <div>
        {/* Render Stock Info*/}
        <RenderStock getGlobal={getGlobal} />
      </div>

      <div>

        {/* Render Input Field*/}
        <InputField
          stockTickerSymbol={stockTickerSymbol}
          setStockTickerSymbol={setStockTickerSymbol}
          stockPrice={stockPrice}
          setStockPrice={setStockPrice}
          stockQuantity={stockQuantity}
          setStockQuantity={setStockQuantity}
          getGlobal={getGlobal}
          setGlobal={setGlobal}
        />
      </div>
    </div>
  );
};

export default App;
