const DeviceData = () => {
  return (
    <div className="relative mb-4 w-full overflow-hidden rounded-lg bg-white px-3 py-4 pt-14">
      {/* <div className="absolute h-full w-full bg-red-400"></div> */}

      <div className="absolute -mt-[75px] w-32 rounded-xl bg-gray-500 p-4">
        <p className="mt-4 text-3xl font-bold" style={{ color: "white" }}>
          Dec
        </p>
      </div>

      <div className="flex">
        <DataChunk amount={"1"} title={"Monthly Total"} />
        <DataChunk amount={"7:00am"} title={"Peak Time"} />
      </div>

      <hr />

      <div className="flex">
        <DataChunk amount={"Auto"} title={"Primary Method"} />
        <DataChunk amount={"19-39g"} title={"Avg. Portion Size"} />
      </div>
    </div>
  );
};

const DataChunk = ({ amount, title }: { amount: string; title: string }) => {
  return (
    <div className="w-1/2 p-4">
      <p className="text-4xl font-bold">{amount}</p>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default DeviceData;
