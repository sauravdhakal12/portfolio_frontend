import HeaderSection from "../HeaderSection";

const RenderStocks = ({
  getGlobal,
  setGlobal,
}) => {

  const removeStock = (id) => {
    const newList = [];

    getGlobal.forEach((stock) => {
      if (stock.id !== id) newList.push(stock);
    });

    setGlobal(newList);
  };

  return(
    <div id="render-stocks">
      <HeaderSection heading={"My Stocks"} />

      {getGlobal.map((stock) => (
        <p key={stock.id}>
          Name: {stock.tickerSymbol} <br />
          Quantity: {stock.quantity} <br />
          Price: {stock.price} <br />
          <button onClick={() => removeStock(stock.id)}>Remove</button>
        </p>
      ))}
    </div>
  )
}

export default RenderStocks;
