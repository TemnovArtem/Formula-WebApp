import "./StyleReg.css";
import StyledInput from "../Components/inputContainer/InputContainer.jsx";
import AccountPhoto from "./AccountAdd.jsx";
import "@fontsource-variable/tektur";

function Registration() {
  return (
    <div className="shader-effect">
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
          <div>
            <button className="Sign-up">Sign Up</button>
          </div>
          <div>
            <button className="Log-in">Log in?</button>
          </div>
          <div>
            <button className="Forgot-password">forgot password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
