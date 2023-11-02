import { useState, useEffect } from "react";
import InputField from "./components/display/StockInputField";
import RenderStock from "./components/display/RenderStocksInfo";
import Menu from "./components/NavigationMenuSection";
import { fetchAll } from "./services/Services";

const App = () => {
  const [stockTickerSymbol, setStockTickerSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [getGlobal, setGlobal] = useState([]);

  // Fetch data from server
  useEffect(() => {
    fetchAll().then((res) => setGlobal(res));
  }, []);

  // todo: refactor into its own file
  // Returns the screen to be rendered
  const displayScreen = () => {
    if (currentScreen === "Home") {
      return (
        // Render Stock Info
        <RenderStock
          getGlobal={getGlobal}
          setGlobal={setGlobal}
        />
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
    <div id="main-div">
      <div id="nav-menu-outer">
        <Menu currentScreen={currentScreen} setCurrentScreen={setCurrentScreen}/>
      </div>
      <div id="display-screen-outer">
        {displayScreen()}
      </div>

    </div>
  );
};

export default App;
