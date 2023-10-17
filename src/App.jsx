import { useState } from "react";

const global = [];

const App = () => {
  const [stockTickerSymbol, setStockTickerSymbol] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  // Allow input field to be updated
  const handleStockTickerSymbol = (event) => {
    setStockTickerSymbol(event.target.value);
  }

  const handleStockQuantity = (event) => {
    setStockQuantity(event.target.value);
  }

  const handleStockPrice = (event) => {
    setStockPrice(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const ts = event.target[0].value;
    const qt = event.target[1].value;
    const pr = event.target[2].value;

    if(!ts || !qt || !pr){
    // todo: Notification of faliure
      alert("Empty field not allowed");
      return;
    }

    const newData = {
      "tickerSymbol" : ts,
      "quantity": qt,
      "price": pr
    };

    global.push(newData);

    // todo: Notification of success
    setStockTickerSymbol("");
    setStockPrice("");
    setStockQuantity("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        {/*Ticker Symbol*/}
        <input
          type="text"
          value={stockTickerSymbol}
          onChange={handleStockTickerSymbol}
          placeholder="Ticker Symbol"
        />

        {/*Stock Quantity*/}
        <input
          type="number"
          value = {stockQuantity}
          onChange={handleStockQuantity}
          placeholder="Quantity"
        />

        {/*Stock Price*/}
        <input
          type="text"
          value = {stockPrice}
          onChange={handleStockPrice}
          placeholder="Price"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
