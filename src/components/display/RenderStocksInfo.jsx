import HeaderSection from "../HeaderSection";
import { removeStock } from "../../services/Services";

const RenderStocks = ({
  getGlobal,
  // setGlobal,
}) => {

  const removeStockHandler = (id) => {
    // const newList = [];

    // getGlobal.forEach((stock) => {
    //   if (stock.id !== id) newList.push(stock);
    // });

    // setGlobal(newList);
    removeStock(id);
  };

  return(
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
