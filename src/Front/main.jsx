import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Registration from "./Registration/Registration.jsx";
import ButtonFormula from "./Components/ButtonFormula/ButtonFormula.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<Registration></Registration>*/}
    <MainMenu></MainMenu>
  </StrictMode>,
);
