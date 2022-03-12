const CardPlaceholder = () => (
  <div className=" border border-gray-400 shadow rounded-lg p-6 lg:h-96 max-w-sm w-full">
    <div className="animate-pulse flex py-1 item-center space-x-48 mb-4">
      <div className="flex flex-1 h-2 w-2/12 bg-gray-400 rounded"></div>
      <div className="flex flex-1 h-2 w-2/12 bg-gray-400 rounded"></div>
    </div>
    <div className="flex animate-pulse space-x-4 items-center md:flex-col md:items-stretch">
      <div className="rounded-full bg-gray-400 h-32 w-32 md:mb-4"></div>
      <div className="flex-1 space-y-6 py-1 justify-center">
        <div className="flex flex-1 h-2 w-24 bg-gray-400 rounded"></div>
        <div className="flex flex-1 h-2 bg-gray-400 rounded"></div>
        <div className="flex flex-1 h-2 w-24 bg-gray-400 rounded"></div>
        <div className="flex flex-1 h-2 bg-gray-400 rounded"></div>
        <div className="flex-1 h-2 w-24 bg-gray-400 rounded hidden md:flex md:flex-1"></div>
        <div className="flex-1 h-2 bg-gray-400 rounded hidden md:flex md:flex-1"></div>
      </div>
    </div>
  </div>
);

export default CardPlaceholder;
