import { useState } from "react";

const StockInfo = ({stock}) => {
  return (
    <li key={stock.id}>{stock.name}</li>
  )
}

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

    //todo: GetId will not work after delete
    const getId = () => {
      return getGlobal.length + 1
    }

    const newData = {
      "id": getId,
      "tickerSymbol" : ts,
      "quantity": qt,
      "price": pr
    };

    setGlobal(getGlobal.concat([newData]));

    // todo: Notification of success
    setStockTickerSymbol("");
    setStockPrice("");
    setStockQuantity("");
  }

  // getGlobal.map((a) => console.log(a));
  return (
    <div>
      {getGlobal.map((stock) => (
        <p key={stock.id}>
          Name: {stock.tickerSymbol} <br />
          Quantity: {stock.quantity} <br />
          Price: {stock.price} <br />
        </p>
      ))}
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
    </div>
  );
};

export default App;
