const Button = ({
  text,
  className,
  onClick,
  buttonColor,
}: {
  text: string;
  className: string;
  buttonColor: "orange" | "green";
  onClick: () => void;
}) => {
  return (
    <button
      className={`min-w-[300px] rounded-full p-3 font-bold ${className}`}
      style={{
        backgroundColor: buttonColor === "green" ? "#95FFCC" : "#FEA725",
        color: buttonColor === "green" ? "#365F4B" : "#FFF4E4",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
