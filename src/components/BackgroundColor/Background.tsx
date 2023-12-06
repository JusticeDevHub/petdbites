import { type ReactNode } from "react";
import { motion } from "framer-motion";

const Background = ({
  type,
  children,
}: {
  type: "dark" | "orange" | "white";
  children: ReactNode;
}) => {
  return (
    <div
      className="flex min-h-screen justify-center pt-8"
      style={{
        backgroundColor:
          type === "dark"
            ? "#48544E"
            : type === "orange"
            ? "#FEA725"
            : "#F1F1F1",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex min-h-full items-center">
          <div className="maxWidth px-4">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
