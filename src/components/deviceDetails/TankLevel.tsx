import { getTankAmount } from "../../utils/getTankAmount";

const TankLevel = ({ deviceId }: { deviceId: string }) => {
  return (
    <div className="flex w-full justify-between">
      <BlockData type={"Water"} amount={getTankAmount(deviceId, "water")} />
      <BlockData type={"Food"} amount={getTankAmount(deviceId, "food")} />
    </div>
  );
};

const BlockData = ({
  type,
  amount,
}: {
  type: "Water" | "Food";
  amount: number;
}) => {
  return (
    <div className="mb-3 w-[49%] rounded-lg bg-white px-3 py-4">
      <p className="mb-1 text-center">{type} Tank Level is Medium</p>
      <div className="flex h-[140px] w-full items-center justify-center rounded-lg bg-gray-500">
        <p className="text-3xl font-semibold text-white">{amount}%</p>
      </div>
    </div>
  );
};

export default TankLevel;
