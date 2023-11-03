import { useState, useEffect } from "react";
import InputField from "./components/display/StockInputField";
import RenderStock from "./components/display/RenderStocksInfo";
import Menu from "./components/NavigationMenuSection";
import Notification from "./components/NotificationMenu";
import { fetchAll } from "./services/Services";
import "./style/styles.css";

const App = () => {
  const [stockTickerSymbol, setStockTickerSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");
  const [currentScreen, setCurrentScreen] = useState("Home");
  const [getGlobal, setGlobal] = useState([]);
  const [displayMessage, setdisplayMessage] = useState("");

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
          displayMessage={setdisplayMessage}
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
        <Notification message={displayMessage} />
        {displayScreen()}
      </div>

    </div>
  );
};

export default App;
