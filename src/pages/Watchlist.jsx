import StockCard from "../components/StockCard";

const WatchList = () => {
  return (
    <div className="m-4">
      <div className="flex flex-row-reverse mb-8">
        <button
          type="button"
          class="bg-indigo-500 rounded-md py-2 px-8 hover:bg-indigo-700"
        >
          + Add
        </button>
      </div>
      <ul role="list" className="grid grid-cols-3 gap-4">
        <StockCard stockCode="RIL" stockName="Reliance" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="TIS" stockName="Tesla" />
        <StockCard stockCode="RIL" stockName="Reliance" />
      </ul>
    </div>
  );
};

export default WatchList;
