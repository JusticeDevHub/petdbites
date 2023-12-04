import { useRouter } from "next/router";
import OrangeBackground from "../../components/BackgroundColor/OrangeBackground";
import GreenButton from "../../components/buttons/GreenButton";
import Title from "../../components/text/Title";
import WhiteLine from "../../components/WhiteLines";

const MyDevices = () => {
  const router = useRouter();

  return (
    <OrangeBackground>
      <Title text={"My Devices"}></Title>

      {[1, 2, 3, 42].map((id, i) => {
        return (
          <div key={i}>
            <WhiteLine />

            <div
              className="flex w-full cursor-pointer justify-between"
              onClick={() => {
                router.push(`/myDevices/${id}`);
              }}
            >
              <p>{`Device ${id}`}</p>
              <p className="mx-4">{">"}</p>
            </div>
          </div>
        );
      })}

      <WhiteLine />

      <div className="flex justify-center">
        <GreenButton
          text={"Add a new device"}
          className={""}
          onClick={() => {
            router.push("/petdybiteSetup/2");
          }}
        />
      </div>
    </OrangeBackground>
  );
};

export default MyDevices;
