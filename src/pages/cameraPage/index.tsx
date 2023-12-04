import { useEffect, useState } from "react";

const CameraPage = () => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [showDot, setShowDot] = useState(true);

  const updateTime = () => {
    setYear(new Date().getFullYear().toString());
    setMonth(new Date().getMonth().toString().padStart(2, "0"));
    setDay(new Date().getDate().toString().padStart(2, "0"));
    setHour(new Date().getHours().toString().padStart(2, "0"));
    setMinute(new Date().getMinutes().toString().padStart(2, "0"));
  };

  useEffect(() => {
    updateTime();

    const interval = setInterval(() => {
      updateTime();

      setShowDot((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex h-screen w-screen  justify-center bg-black p-2 pt-4">
      <div className="flex items-center justify-center ">
        <div
          className="mr-1 h-3 w-3 rounded-full bg-red-500"
          style={{ opacity: showDot ? 1 : 0, transform: "translateY(1px)" }}
        ></div>
        <p className="mr-2 text-white">
          {year}/{month}/{day}
        </p>
        <p className="text-white">
          {hour}:{minute}
        </p>
      </div>
    </div>
  );
};

export default CameraPage;
