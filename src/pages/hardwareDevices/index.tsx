import Image from "next/image";
import OrangeBackground from "../../components/BackgroundColor/OrangeBackground";
import { PrismaClient } from "@prisma/client";
import { DeviceType } from "../../utils/dbSchemaTypes";
import Title from "../../components/text/Title";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import QRCode from "qrcode";
import GreenButton from "../../components/buttons/GreenButton";
import { motion } from "framer-motion";
import Button from "../../components/buttons/Button";
import { z } from "zod";
import { getTankAmount } from "../../utils/getTankAmount";

type ServerSidePropType = {
  devices: z.infer<typeof DeviceType>[];
};

const AdminPage = (props: ServerSidePropType) => {
  const [seletedDevice, setSelectedDevice] = useState<z.infer<
    typeof DeviceType
  > | null>(null);

  useEffect(() => {
    props.devices.forEach((device: z.infer<typeof DeviceType>) => {
      const canvas = document.getElementById(`canvas-${device.id}`);
      QRCode.toCanvas(canvas, device.id, function () {
        console.log("");
      });
    });
  }, []);

  return (
    <OrangeBackground>
      {seletedDevice !== null && (
        <ConfirmDisconnect
          device={seletedDevice}
          setSelectedDevice={setSelectedDevice}
        />
      )}

      <div className="py-16">
        <Title text={"PetdyBite Devices"} className="mb-1"></Title>

        <hr className="mb-8" />

        {props.devices.map((device: z.infer<typeof DeviceType>, i: number) => {
          return (
            <div key={i} className="mb-8">
              <p className="mb-4 text-center text-2xl font-bold">
                Device: {i + 1}
              </p>
              <div className="flex justify-between">
                <div className="overflow-hidden rounded-lg">
                  <canvas id={`canvas-${device.id}`}></canvas>
                </div>

                <div className="relative h-32 w-32">
                  <Image
                    className="relative z-0 object-contain"
                    src={"/productImage.png"}
                    alt={""}
                    fill
                  ></Image>
                </div>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Device Id</p>
                <p className="text-lg">{device.id}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Device Name</p>
                <p className="text-lg">{device.deviceName}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Food Tank</p>
                <p className="text-lg">{getTankAmount(device.id, "food")}%</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Water Tank</p>
                <p className="text-lg">{getTankAmount(device.id, "water")}%</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg">Connected</p>

                <div className="flex items-center">
                  <div
                    className="mr-1 h-4 w-4 translate-y-[1px] rounded-full"
                    style={{
                      backgroundColor: device.connected
                        ? "lightgreen"
                        : "rgba(255,80,80)",
                    }}
                  ></div>
                  <p className="text-lg">
                    {device.connected ? "true" : "false"}
                  </p>
                </div>
              </div>

              {device.connected && (
                <div className="mt-5 flex justify-center">
                  <GreenButton
                    text={"Disconnect Device"}
                    className={""}
                    onClick={() => {
                      setSelectedDevice(device);
                    }}
                  />
                </div>
              )}

              <hr className="mt-8" />
            </div>
          );
        })}
      </div>
    </OrangeBackground>
  );
};

const ConfirmDisconnect = ({
  device,
  setSelectedDevice,
}: {
  device: z.infer<typeof DeviceType> | null;
  setSelectedDevice: Dispatch<
    SetStateAction<z.infer<typeof DeviceType> | null>
  >;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="fixed left-0 top-0 z-50 h-full w-full"
    >
      <div className="h-full w-full bg-black opacity-80"></div>

      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="rounded-xl bg-white p-8">
          <p className="text-lg font-bold text-black opacity-80">
            {`Confirm to Disconnect Device ${device?.deviceName} from User Account?`}
          </p>

          <div className="flex justify-between pt-4">
            <div className="w-1/3">
              <Button
                text={"Cancel"}
                className={""}
                buttonColor={"green"}
                onClick={() => {
                  setSelectedDevice(null);
                }}
              ></Button>
            </div>

            <div className="w-1/3">
              <Button
                text={"Confirm"}
                className={""}
                buttonColor={"green"}
                onClick={() => {
                  fetch("/api/hardwareDevices/disconnectDevice", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      device,
                    }),
                  })
                    .then((res) => {
                      return res.json();
                    })
                    .then(() => {
                      setSelectedDevice(null);
                    });
                }}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient();
  const devices: z.infer<typeof DeviceType>[] =
    await prisma.$queryRaw`SELECT * FROM Devices `;
  const props: ServerSidePropType = {
    devices,
  };

  return {
    props: props,
  };
}

export default AdminPage;
