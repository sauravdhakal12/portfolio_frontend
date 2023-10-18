import HeaderSection from "../HeaderSection";

const RenderStocks = ({getGlobal}) => {
  return(
    <div>
      <HeaderSection heading={"My Stocks"} />

      {getGlobal.map((stock) => (
        <p key={stock.id}>
          Name: {stock.tickerSymbol} <br />
          Quantity: {stock.quantity} <br />
          Price: {stock.price} <br />
        </p>
      ))}
    </div>
  )
}

export default RenderStocks;
