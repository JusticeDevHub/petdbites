import { useRouter } from "next/router";
import OrangeBackground from "../../../components/BackgroundColor/OrangeBackground";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import Title from "../../../components/text/Title";

const ScanDevice = () => {
  const router = useRouter();
  const [scannedData, setScannedData] = useState("");

  const setupQRCode = () => {
    function onScanError(errorMessage: string) {
      console.error(errorMessage);
    }
    function onScanSuccess(decodedText: string) {
      setScannedData(decodedText);
    }
    const config = {
      fps: 10,
      qrbox: { width: 300, height: 300 },
    };
    const html5QrcodeScanner = new Html5QrcodeScanner("reader", config, false);
    html5QrcodeScanner.render(onScanSuccess, onScanError);
  };

  useEffect(() => {
    setupQRCode();
  }, []);

  useEffect(() => {
    fetch("/api/scanDevice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scannedData }),
    })
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        if (response.length > 0) {
          router.push("/petdybiteSetup/complete");
        }
      });
  }, [scannedData]);

  return (
    <OrangeBackground>
      <Title text={"Scan QR code with camera"} className="mb-12" />

      <div id="reader"></div>

      {/* <motion.div
        initial={{ transform: "translateY(50px)" }}
        whileInView={{ transform: "translateY(0px)" }}
      >
        <button
          className="mt-12 flex items-center text-xl"
          onClick={() => {
            router.push("/petdybiteSetup/complete");
          }}
        >
          {`Continue`} <IoIosArrowRoundForward className="mt-1 text-3xl" />
        </button>
      </motion.div> */}
    </OrangeBackground>
  );
};

export default ScanDevice;
