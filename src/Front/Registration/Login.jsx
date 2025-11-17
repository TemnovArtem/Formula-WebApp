import "./StyleReg.css";
import StyledInput from "../Components/inputContainer/InputContainer.jsx";
import AccountPhoto from "./AccountAdd.jsx";
import "@fontsource-variable/tektur";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const User = { email, username, password, count_of_test: 0 };

    fetch("http://127.0.0.1:8080/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(User),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.ok) {
          navigate("/menu");
        } else {
          console.log("Login failed:", data.message);
        }
      })
      .catch((err) => console.error(err));
  };

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
