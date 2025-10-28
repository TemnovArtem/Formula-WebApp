import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Registration from "./Registration/Registration.jsx";
import ButtonFormula from "./Components/ButtonFormula/ButtonFormula.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";
import PageFormula from "./Components/PageFormulaComponent/Formula/PageFormula.jsx";
import PageAnother from "./Components/PageFormulaComponent/AnotherFormula/PageAnother.jsx";
import AdvancedPage from "./FormulasPage/Advanced/AdvancedPage.jsx";
import BasicPage from "./FormulasPage/Basic/BasicPage.jsx";
import AlgorithmPage from "./FormulasPage/Algorithm/AlgorithmPage.jsx";
import PhysicsPage from "./FormulasPage/Physics/PhysicsPage.jsx";
import TestPage from "./TestSkill/TestPage.jsx";
import PageAboutDeveloper from "./AboutDeveloper/PageAboutDeveloper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<Registration></Registration>
    <MainMenu></MainMenu>
    <PageAnother></PageAnother>*/}
    {/*    <AdvancedPage></AdvancedPage>
    <AlgorithmPage></AlgorithmPage>
    <BasicPage></BasicPage>*/}
    <PhysicsPage></PhysicsPage>
    {/*  <TestPage></TestPage>*/}
    {/*<PageAboutDeveloper></PageAboutDeveloper>*/}
  </StrictMode>,
);
