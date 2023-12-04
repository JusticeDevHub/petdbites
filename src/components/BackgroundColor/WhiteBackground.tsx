import { type ReactNode } from "react";
import Background from "./Background";

const DarkBackground = ({ children }: { children: ReactNode }) => {
  return <Background type={"white"}>{children}</Background>;
};

export default DarkBackground;
