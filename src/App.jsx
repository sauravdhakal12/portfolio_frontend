import { useState } from "react";
import InputField from "./components/display/StockInputField";
import RenderStock from "./components/display/RenderStocksInfo";
import Menu from "./components/NavigationMenuSection";

const App = () => {
  const [stockTickerSymbol, setStockTickerSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [currentScreen, setCurrentScreen] = useState("Home");
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

  const screen_names = ["Home", "Insert"];

  // todo: refactor into its own file
  // Returns the screen to be rendered
  const displayScreen = () => {
    if (currentScreen === "Home") {
      return (
        // Render Stock Info
        <RenderStock getGlobal={getGlobal} />
      )
    }
    else if (currentScreen === "Insert") {
      return (
        // Render Input Field
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
      )
    }
  }

  return (
    <div>
      <div>
        <Menu currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}/>
      </div>
      <div>
        {displayScreen()}
      </div>

    </div>
  );
};

export default App;
