"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import WhiteBackground from "../../../components/BackgroundColor/WhiteBackground";
import { useEffect, useState } from "react";
import TankLevel from "../../../components/deviceDetails/TankLevel";
import DeviceData from "../../../components/deviceDetails/DeviceData";
import OrangeButton from "../../../components/buttons/OrangeButton";

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

const DeviceDetails = () => {
  const [deviceName, setDeviceName] = useState("");

  const pathName = usePathname();
  const deviceId = reverseString(
    reverseString(pathName || "").split("/")[0] || ""
  );
  const router = useRouter();

  const FeedFrequencePerDayOptions = () => {
    const frequencyOptions = ["Once a Day"];
    for (let i = 2; i <= 8; i++) {
      frequencyOptions.push(`${i} times a Day`);
    }
    return frequencyOptions;
  };

  const getFeedingTimeOptions = () => {
    const feedingTimeOptions = [];
    for (let i = 6; i < 22; i++) {
      const time =
        i === 12 ? `12:00pm` : i < 12 ? `${i}:00am` : `${i - 12}:00pm`;
      feedingTimeOptions.push(time);
    }
    return feedingTimeOptions;
  };

  const [feedingTime, setFeedingTime] = useState(getFeedingTimeOptions());

  const setupFeedingData = (feedingTimes: number) => {
    const feedingData: string[] = [];
    for (let i = 0; i < feedingTimes; i++) {
      feedingData.push(getFeedingTimeOptions()[i] || "");
    }
    setFeedingTime(feedingData);
  };

  const getFeedingPortions = () => {
    const portions = [
      "1/8-1/4 cup (19-39 g)",
      "1/4-1/2 cup (39-78 g)",
      "1/2-3/4 cup (78-116 g)",
      "3/4-1 cup (116-223 g)",
      "1.5-2 cups (223-310 g)",
      "2-2.5 cups (310-388 g)",
      "2.5-3 cups (388-465 g)",
      "3-4 cups (465-620 g)",
    ];
    return portions;
  };

  useEffect(() => {
    setupFeedingData(1);

    const params = new URLSearchParams(document.location.search);
    const deviceName = params.get("name");
    setDeviceName(deviceName || "");
  }, []);

  return (
    <WhiteBackground>
      <div className="relative flex flex-col items-center pb-16">
        <p className="blackText text-3xl font-semibold">{`Device: ${deviceName}`}</p>

        <div className="relative h-96 w-96">
          <Image
            className="relative object-contain"
            src={"/productImage.png"}
            alt={""}
            fill
          ></Image>
        </div>

        <OrangeButton
          text={"Access Camera"}
          className={"mb-4"}
          onClick={() => {
            router.push("/cameraPage");
          }}
        ></OrangeButton>

        <TankLevel deviceId={deviceId} />

        <DeviceData />

        <div className="flex w-full items-center justify-between">
          <p>Device Name</p>
          <input
            type="text "
            className="mb-2 rounded p-1 text-right"
            defaultValue={deviceName}
          />
        </div>

        <div className="flex w-full items-center justify-between">
          <p>Feature</p>

          <select name="" id="" className="mb-2">
            <option value="">Auto Feed</option>
            <option value="" disabled>
              Manual Feed
            </option>
          </select>
        </div>

        <div className="flex w-full items-center justify-between">
          <p>How Often</p>

          <select
            name=""
            id=""
            placeholder="Select an option"
            className="mb-2"
            onChange={(e) => {
              const index =
                FeedFrequencePerDayOptions().indexOf(e.target.value) + 1;
              setupFeedingData(index);
            }}
          >
            {FeedFrequencePerDayOptions().map((text, i) => {
              return (
                <option key={i} value={text}>
                  {text}
                </option>
              );
            })}
          </select>
        </div>

        <Line />

        {feedingTime.map((time, i) => {
          return (
            <div key={i} className="w-full">
              <div className="flex w-full items-center justify-between">
                <p className="mt-2">Feeding Time</p>

                <div>
                  <select name="" id="" className="my-2">
                    {getFeedingTimeOptions().map((time, i) => {
                      return (
                        <option key={i} value={time}>
                          {time}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="flex w-full justify-between ">
                <p>Portion</p>
                <select name="" id="" className="mb-2">
                  {getFeedingPortions().map((portion, i) => {
                    return (
                      <option key={i} value="">
                        {portion}
                      </option>
                    );
                  })}
                </select>
              </div>

              <Line />
            </div>
          );
        })}
      </div>
    </WhiteBackground>
  );
};

const Line = () => {
  return (
    <div
      className="mt-1 w-full"
      style={{ backgroundColor: "lightgray", height: 1 }}
    ></div>
  );
};

export default DeviceDetails;
