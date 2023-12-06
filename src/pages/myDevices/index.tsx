import { useRouter } from "next/router";
import OrangeBackground from "../../components/BackgroundColor/OrangeBackground";
import GreenButton from "../../components/buttons/GreenButton";
import Title from "../../components/text/Title";
import WhiteLine from "../../components/WhiteLines";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import { DeviceType } from "../../utils/dbSchemaTypes";
import { z } from "zod";

type ServerSidePropType = {
  devices: z.infer<typeof DeviceType>[];
};

const MyDevices = (props: ServerSidePropType) => {
  const router = useRouter();

  return (
    <OrangeBackground>
      <Title text={"My Devices"}></Title>

      {props.devices.length === 0 && (
        <div>
          <WhiteLine />
          <p className="text-center">Currently No Devices Added</p>
        </div>
      )}

      {props.devices.map((device: z.infer<typeof DeviceType>, i: number) => {
        return (
          <div key={i}>
            <WhiteLine />

            <div
              className="flex w-full cursor-pointer justify-between"
              onClick={() => {
                router.push(
                  `/myDevices/${device.id}?name=${device.deviceName}`
                );
              }}
            >
              <p className="font-semibold">{`Device ${device.deviceName}`}</p>
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

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  const prisma = new PrismaClient();

  const devices: z.infer<typeof DeviceType>[] =
    await prisma.$queryRaw`SELECT * FROM Devices WHERE email = ${session?.user?.email};`;

  const props: ServerSidePropType = {
    devices,
  };

  return {
    props: props,
  };
}

export default MyDevices;
