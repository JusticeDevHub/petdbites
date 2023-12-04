import Button from "./Button";

const OrangeButton = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      text={text}
      className={className}
      onClick={onClick}
      buttonColor={"orange"}
    />
  );
};

export default OrangeButton;
