import { useRouter } from "next/router";
import OrangeBackground from "../../components/BackgroundColor/OrangeBackground";
import GreenButton from "../../components/buttons/GreenButton";
import { signOut } from "next-auth/react";
import Title from "../../components/text/Title";

const ProfilePage = () => {
  const router = useRouter();

  return (
    <OrangeBackground>
      <div className="flex flex-col justify-center">
        <Title text={"My Profile"}></Title>

        <hr className="my-3" />

        <GreenButton
          text={"My Devices"}
          className={"mb-3 w-full"}
          onClick={() => {
            router.push("/myDevices");
          }}
        />
      </div>
      <GreenButton
        text={"Hardware Devices Page"}
        className={"mb-3"}
        onClick={() => {
          router.push("/hardwareDevices");
        }}
      />
      <GreenButton
        text={"Sign Out"}
        className={""}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      />

      <hr className="my-3" />
    </OrangeBackground>
  );
};

export default ProfilePage;
