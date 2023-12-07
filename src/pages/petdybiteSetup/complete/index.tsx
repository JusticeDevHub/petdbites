import { useRouter } from "next/router";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import GreenButton from "../../../components/buttons/GreenButton";
import Title from "../../../components/text/Title";
import { useEffect, useState } from "react";

const ScanCompleted = () => {
  const router = useRouter();
  const [deviceName, setDeviceName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(document.location.search);
    setDeviceName(params.get("name") || "");
  }, []);

  return (
    <OrangeBackground>
      <Title text={"Scanning Successful"} className="mb-3 text-center"></Title>

      <p className="mb-4 text-center text-xl font-bold">
        Device Added: <span className="underline">{deviceName}</span>
      </p>

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
