interface ButtonProps {
  isDisabled: boolean;
  type: "submit" | "button";
  text: string;
  fullWidth: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  text,
  type,
  fullWidth,
}) => {
  return (
    <button
      className={`btn ${fullWidth ? "w-full" : ""} ${
        isDisabled ? "btn_disabled" : "btn_blue"
      }`}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
