import { motion } from "framer-motion";

const Title = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ transform: "translateX(50px)" }}
        whileInView={{ transform: "translateX(0px)" }}
      >
        <p className={`text-3xl font-bold ${className}`}>{text}</p>
      </motion.div>
    </div>
  );
};

export default Title;
