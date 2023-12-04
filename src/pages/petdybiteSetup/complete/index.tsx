import { useRouter } from "next/router";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import GreenButton from "../../../components/buttons/GreenButton";
import Title from "../../../components/text/Title";

const ScanCompleted = () => {
  const router = useRouter();

  return (
    <OrangeBackground>
      <Title text={"Scanning Successful"} className="mb-8 text-center"></Title>

      <div className="flex justify-center">
        <GreenButton
          text={"Next"}
          className={""}
          onClick={() => {
            router.push("/myDevices");
          }}
        />
      </div>
    </OrangeBackground>
  );
};

export default ScanCompleted;
