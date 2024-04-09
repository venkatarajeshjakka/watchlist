const StockCard = ({ stockName, stockCode, trend = "Bullish" }) => {
  return (
    <li
      key={stockCode}
      className="flex justify-between gap-x-6 py-5 bg-violet-200 rounded-lg px-5"
    >
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-md font-semibold leading-6 text-gray-900">
            {stockName}
          </p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">
            {stockCode}
          </p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-md leading-6 text-gray-900">{trend}</p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last updated today
        </p>
      </div>
    </li>
  );
};

export default StockCard;
