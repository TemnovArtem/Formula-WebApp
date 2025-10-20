import "./StyleReg.css";
import StyledInput from "../Components/InputContainer.jsx";
import AccountPhoto from "./AccountAdd.jsx";

function Registration() {
  return (
    <div className="registration-container">
      <AccountPhoto></AccountPhoto>

      <h1 className="reg">Registration</h1>

      <div className="form-input-row">
        <label className="registration-label">
          <StyledInput label={"e-mail"}></StyledInput>
        </label>

        <label className="registration-label">
          <StyledInput label={"user name"}></StyledInput>
        </label>

        <label className="registration-label">
          <StyledInput label={"password"}></StyledInput>
        </label>
      </div>

      <div className="Button-container">
        <div className="Sign-up">
          <button>Sign Up</button>
        </div>
        <div className="Log-in">
          <button>Log in?</button>
        </div>
        <div className="Forgot-password">
          <button>forgot password?</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
