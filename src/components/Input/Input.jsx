import "./Input.css";

function Input({ label, id, ...props }) {
  return (
    <label className="input">
      <span>{label}</span>

      <input id={id} {...props} />
    </label>
  );
}

export default Input;