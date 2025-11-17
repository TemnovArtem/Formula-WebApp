import "./StyleInput.css";

const StyledInput = ({ label, name, value, onChange, type = "text" }) => {
  return (
    <div className="inputContainer">
      <input
        className="inputField"
        name={name}
        type={type}
        value={value}
        placeholder={label}
        onChange={onChange}
      />
    </div>
  );
};

export default StyledInput;
