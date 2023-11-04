import HeaderSection from "../HeaderSection";
import { removeStock } from "../../services/Services";
import notifiy from "../../utils/notification";

const RenderStocks = ({
  getGlobal,
  setGlobal,
  displayMessage,
}) => {

  const removeStockHandler = async (id) => {
    const res = await removeStock(id);

    if (!res) {
      notifiy("Error: Item doesn't exsit", displayMessage, "error");
    }
    else {
      const newList = [];

      getGlobal.forEach((stock) => {
        if (stock.id !== id) newList.push(stock);
      });

      setGlobal(newList);
      notifiy(`Item: ${res.tickerSymbol} successfully removed`, displayMessage, "success");
    }
  };

  return (
    <div id="render-stocks">
      <HeaderSection heading={"My Stocks"} />

      {getGlobal.map((stock) => (
        <p key={stock.id}>
          Name: {stock.tickerSymbol} <br />
          Quantity: {stock.quantity} <br />
          Price: {stock.price} <br />
          <button onClick={() => removeStockHandler(stock.id)}>Remove</button>
        </p>
      ))}
    </div>
  )
}

export default RenderStocks;
