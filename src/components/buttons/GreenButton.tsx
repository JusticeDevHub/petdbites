import Button from "./Button";

const GreenButton = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick: () => void;
}) => {
  return (
    <Button
      text={text}
      className={className}
      onClick={onClick}
      buttonColor={"green"}
    />
  );
};

export default GreenButton;
