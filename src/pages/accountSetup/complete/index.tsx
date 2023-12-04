import { useRouter } from "next/router";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import Title from "../../../components/text/Title";
import GreenButton from "../../../components/buttons/GreenButton";
import WhiteLine from "../../../components/WhiteLines";
import { useContext } from "react";
import { userDataContext } from "../../../hooks/userDataContext";

const AccountSetupComplete = () => {
  const router = useRouter();

  const context = useContext(userDataContext);

  return (
    <OrangeBackground>
      <Title text={"Account Setup Complete"} className="text-center"></Title>

      <div className="mt-4 flex w-full justify-center">
        <div className="mb-2 h-32 w-32 rounded-full bg-white"></div>
      </div>

      <WhiteLine />
      <div className="flex justify-between">
        <p>Name</p>
        <p>{context.userData.dogData.FirstName}</p>
      </div>
      <WhiteLine />
      <div className="flex justify-between">
        <p>Gender</p>
        <p>{context.userData.dogData.gender}</p>
      </div>
      <WhiteLine />
      <div className="flex justify-between">
        <p>Breed</p>
        <p>{context.userData.dogData.breed}</p>
      </div>
      <WhiteLine />
      <div className="flex justify-between">
        <p>Dietary Behaviour</p>
        <p>{context.userData.dogData.dietaryBehaviour}</p>
      </div>
      <WhiteLine />

      <div className="flex justify-center">
        <GreenButton
          text={"Complete"}
          className={""}
          onClick={() => {
            router.push("/petdybiteSetup/1");
          }}
        />
      </div>
    </OrangeBackground>
  );
};

export default AccountSetupComplete;
