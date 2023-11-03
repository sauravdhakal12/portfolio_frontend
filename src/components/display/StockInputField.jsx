import HeaderSection from "../HeaderSection";
import { addStock } from "../../services/Services";
import notifiy from "../../utils/notification";

const InputField = ({
  stockTickerSymbol, setStockTickerSymbol,
  stockQuantity, setStockQuantity,
  stockPrice, setStockPrice,
  getGlobal, setGlobal,
  displayMessage,
}) => {

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

  // When the form gets submitted
  const handleSubmit = async (event) => {

    event.preventDefault();
    const ts = event.target[0].value;
    const qt = event.target[1].value;
    const pr = event.target[2].value;

    // Make sure fields are non empty
    if (!ts || !qt || !pr) {
      notifiy("Empty fields not allowed", displayMessage);
      return;
    }

    // Create object for stock to be added
    const newData = {
      "tickerSymbol": ts,
      "price": pr,
      "quantity": qt
    };

    // Try to add
    const res = await addStock(newData);

    if (res["error"]) {
      notifiy("Unknown error occured", displayMessage);
      return;
    }

    // If success, update getGlobal
    setGlobal(getGlobal.concat([res]));

    notifiy(`Added entry: ${res.tickerSymbol}`, displayMessage);
    setStockTickerSymbol("");
    setStockPrice("");
    setStockQuantity("");
  }

  return (
    <div id="stocks-input-field">
      <HeaderSection heading={"Add a new Stock"} />

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
          value={stockQuantity}
          onChange={handleStockQuantity}
          placeholder="Quantity"
        />

        {/*Stock Price*/}
        <input
          type="text"
          value={stockPrice}
          onChange={handleStockPrice}
          placeholder="Price"
        />

        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default InputField;
