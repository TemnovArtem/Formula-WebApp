import "./StyleReg.css";
import StyledInput from "../Components/inputContainer/InputContainer.jsx";
import AccountPhoto from "./AccountAdd.jsx";
import "@fontsource-variable/tektur";
import { useNavigate } from "react-router-dom";

import useLogin from "../Hooks/loginHooks.jsx";

function Registration() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit,
  } = useLogin("login");

  return (
    <form className="shader-effect" onSubmit={handleSubmit}>
      <div className="registration-container">
        <AccountPhoto />

        <h1 className="reg">Registration</h1>

        <div className="form-input-row">
          <label className="registration-label">
            <StyledInput
              label="e-mail"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="registration-label">
            <StyledInput
              label="user name"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="registration-label">
            <StyledInput
              label="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="Button-container">
          <div>
            <button className="Sign-up" type="submit">
              Log in
            </button>
          </div>
          <div>
            <button
              className="Log-in"
              type="button"
              onClick={() => navigate("/")}
            >
              Sign up?
            </button>
          </div>
          <div>
            <button
              className="Forgot-password"
              type="button"
              onClick={() => navigate("/forgot")}
            >
              forgot password?
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Registration;
