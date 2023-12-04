import { type ReactNode } from "react";
import Background from "./Background";

const DarkBackground = ({ children }: { children: ReactNode }) => {
  return (
    <Background type={"dark"}>
      <div className="h-full w-full" style={{ color: "#e4e6e5" }}>
        {children}
      </div>
    </Background>
  );
};

export default DarkBackground;
