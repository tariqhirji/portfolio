interface ButtonProps {
  isDisabled: boolean;
  type: "submit" | "button";
  text: string;
  fullWidth: boolean;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  isDisabled,
  text,
  type,
  fullWidth,
  icon,
}) => {
  return (
    <button
      className={`btn ${fullWidth ? "w-full" : ""} ${
        isDisabled ? "btn_disabled" : "btn_blue"
      }`}
      type={type}
      disabled={isDisabled}
    >
      <label
        className={`whitespace-nowrap ${
          isDisabled ? "cursor-not-allowed" : " cursor-pointer"
        }`}
      >
        {" "}
        {text}
      </label>
    </button>
  );
};

export default Button;
