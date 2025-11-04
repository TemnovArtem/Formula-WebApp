import React from "react";
import ButtonFormula from "../Components/ButtonFormula/ButtonFormula.jsx";
import "./MainMenuStyle.css";
import SlideBarPhoto from "../Components/SlideBar/SlideBarPhoto.jsx";
import Info from "../Components/SlideBar/Information/Info.jsx";
import Avatar from "../Components/SlideBar/MyAvatar/Avatar.jsx";
import Question from "../Components/SlideBar/Question/Question.jsx";
import { useNavigate } from "react-router-dom";

function MainMenu() {
  const navigate = useNavigate();
  const Basic = () => {
    navigate("/basic");
  };
  const Advanced = () => {
    navigate("/advanced");
  };
  const Physics = () => {
    navigate("/physics");
  };
  const Programming = () => {
    navigate("/programming");
  };
  const Algorithm = () => {
    navigate("/algorithm");
  };

  return (
    <div className="BackGround-MainMenu">
      <div className="mathematicalFormulas">
        <h1>Mathematical formulas</h1>

        <div className="fewMathematical">
          <h1>
            <span className="OneMain">One</span> a few mathematical formulas
          </h1>
        </div>

        <div className="SlideBar">
          <SlideBarPhoto></SlideBarPhoto>
        </div>

        <div className="buttonContainer">
          <div className="Basic" onClick={Basic}>
            <ButtonFormula label={"Basic"} />
          </div>

          <div className="Advanced" onClick={Advanced}>
            <ButtonFormula label={"Advanced"} />
          </div>

          <Info></Info>
          <Avatar></Avatar>
          <Question></Question>
          <div className="Physics" onClick={Physics}>
            <ButtonFormula label={"Physics"} />
          </div>

          <div className="ProgrAmming" onClick={Programming}>
            <ButtonFormula label={"Programming"} />
          </div>

          <div className="Algorithm" onClick={Algorithm}>
            <ButtonFormula label={"Algorithm"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
