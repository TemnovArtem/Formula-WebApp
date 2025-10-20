import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Registration from "./Registration/Registration.jsx";
import StyledInput from "./Components/InputContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Registration></Registration>
  </StrictMode>,
);
