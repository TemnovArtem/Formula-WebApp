import { Routes, Route } from "react-router-dom";
import Registration from "./Registration/Registration.jsx";
import MainMenu from "./MainMenu/MainMenu.jsx";
import TestPage from "./TestSkill/TestPage.jsx";
import PageAboutDeveloper from "./AboutDeveloper/PageAboutDeveloper.jsx";
import AdvancedPage from "./FormulasPage/Advanced/AdvancedPage.jsx";
import AlgorithmPage from "./FormulasPage/Algorithm/AlgorithmPage.jsx";
import BasicPage from "./FormulasPage/Basic/BasicPage.jsx";
import PhysicsPage from "./FormulasPage/Physics/PhysicsPage.jsx";
import ProgrammingPage from "./FormulasPage/Programming/ProgrammingPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />

      <Route path="/menu" element={<MainMenu />} />

      <Route path="/test" element={<TestPage />} />

      <Route path="/advanced" element={<AdvancedPage />} />

      <Route path="/algorithm" element={<AlgorithmPage />} />

      <Route path="/basic" element={<BasicPage />} />

      <Route path="/physics" element={<PhysicsPage />} />

      <Route path="/programming" element={<ProgrammingPage />} />

      <Route path="/about" element={<PageAboutDeveloper />} />
    </Routes>
  );
}

export default App;
