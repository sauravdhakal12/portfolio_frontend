import HeaderSection from "../HeaderSection";
import { removeStock } from "../../services/Services";
import notifiy from "../../utils/notification";

const RenderStocks = ({
  getGlobal,
  setGlobal,
  displayMessage,
}) => {

  const removeStockHandler = async (stock) => {
    // Confirm deletion
    const ans = confirm(`Delete ${stock.tickerSymbol}`);
    if (!ans) {
      return;
    }

    // Request to remove
    const res = await removeStock(stock.id);

    // If returns null, item doesn't exist
    if (!res) {
      notifiy("Error: Item doesn't exist", displayMessage, "error");
      return;
    }

    // Else, update state variable
    const newList = [];
    getGlobal.forEach((stocks) => {
      if (stocks.id !== stock.id) newList.push(stocks);
    });
    setGlobal(newList);
    
    notifiy(`Item: ${res.tickerSymbol} successfully removed`, displayMessage, "success");
  };

  return (
    <div id="render-stocks">
      <HeaderSection heading={"My Stocks"} />

      {getGlobal.map((stock) => (
        <p key={stock.id}>
          Name: {stock.tickerSymbol} <br />
          Quantity: {stock.quantity} <br />
          Price: {stock.price} <br />
          <button onClick={() => removeStockHandler(stock)}>Remove</button>
        </p>
      ))}
    </div>
  )
}

export default RenderStocks;
