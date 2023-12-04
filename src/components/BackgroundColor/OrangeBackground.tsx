import { type ReactNode } from "react";
import Background from "./Background";

const OrangeBackground = ({ children }: { children: ReactNode }) => {
  return (
    <Background type={"orange"}>
      <div className="h-full w-full" style={{ color: "#e4e6e5" }}>
        {children}
      </div>
    </Background>
  );
};

export default OrangeBackground;
