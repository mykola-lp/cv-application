import "./Button.css";

function Button({ children, type = "button", ...props }) {
  return (
    <button type={type} className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;