import "./StyleReg.css";
import StyledInput from "../Components/inputContainer/InputContainer.jsx";
import AccountPhoto from "./AccountAdd.jsx";
import "@fontsource-variable/tektur";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "./Logick.js"; // імпортуємо функцію
import { useState } from "react";

function Registration() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleFieldChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await saveUserData(form);

    if (success) {
      navigate("/menu"); // тільки якщо перевірка пройдена
    }
  };

  return (
    <div className="shader-effect">
      <div className="registration-container">
        <AccountPhoto></AccountPhoto>

        <h1 className="reg">Registration</h1>

        <div className="form-input-row">
          <label className="registration-label">
            <StyledInput
              label={"e-mail"}
              name={"email"}
              value={form.email}
              onChange={handleFieldChange}
              type={"email"}
            ></StyledInput>
          </label>

          <label className="registration-label">
            <StyledInput
              label={"user name"}
              name={"username"}
              value={form.username}
              onChange={handleFieldChange}
            ></StyledInput>
          </label>

          <label className="registration-label">
            <StyledInput
              label={"password"}
              name={"password"}
              value={form.password}
              onChange={handleFieldChange}
              type={"password"}
            ></StyledInput>
          </label>
        </div>

        <div className="Button-container">
          <div>
            <button className="Sign-up" type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
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
