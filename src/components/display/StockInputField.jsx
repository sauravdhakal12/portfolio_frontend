import HeaderSection from "../HeaderSection";

const InputField = ({
  stockTickerSymbol, setStockTickerSymbol,
  stockQuantity, setStockQuantity,
  stockPrice, setStockPrice,
  getGlobal, setGlobal
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
      "id": getId(),
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

  return (
    <div>
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
  )
}

export default InputField;
