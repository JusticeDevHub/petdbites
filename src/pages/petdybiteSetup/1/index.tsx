import { useRouter } from "next/router";
import DarkBackground from "../../../components/BackgroundColor/DarkBackground";
import OrangeButton from "../../../components/buttons/OrangeButton";
import Title from "../../../components/text/Title";

const WelcomePage = () => {
  const router = useRouter();

  return (
    <DarkBackground>
      <Title text={"Welcome to PetdyBite"} className="mb-4 text-center"></Title>

      <div className="flex justify-center">
        <OrangeButton
          text={"Set up your PetdyBite Device"}
          className={""}
          onClick={() => {
            router.push("/myDevices");
          }}
        />
      </div>
    </DarkBackground>
  );
};

export default WelcomePage;
