import { FaUserSecret, FaCode, FaSkullCrossbones } from "react-icons/fa6";

interface ButtonProps {
  isDisabled: boolean;
  type: "submit" | "button";
  text: string;
  fullWidth: boolean;
  icon?: "code" | "private" | "shutdown";
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
        {text}
      </label>
      <span className={icon ? "ml-2" : ""}>
        {icon === "code" && <FaCode />}
        {icon === "private" && <FaUserSecret />}
        {icon === "shutdown" && <FaSkullCrossbones />}
      </span>
    </button>
  );
};

export default Button;
