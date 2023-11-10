interface ButtonProps {
  variant: "btn_blue" | "btn_secondary";
  type: "submit" | "button";
  text: string;
  fullWidth: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, text, type, fullWidth }) => {
  return (
    <button
      className={`btn ${variant} ${fullWidth ? "w-full" : ""}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
