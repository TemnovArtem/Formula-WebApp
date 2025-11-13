import "./StyleInput.css";

const StyledInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="inputContainer">
      <input
        className="inputField"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder ?? label}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default StyledInput;
