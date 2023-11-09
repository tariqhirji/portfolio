interface ButtonProps {
  variant: "btn_blue" | "btn_secondary";
  type: "submit" | "button";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ variant, text, type }) => {
  return (
    <button className={`w-full btn ${variant}`} type={type}>
      {text}
    </button>
  );
};

export default Button;
