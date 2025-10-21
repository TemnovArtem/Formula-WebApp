import React from "react"; // React is often needed for JSX, even if not directly referenced.
import ButtonFormula from "../Components/ButtonFormula/ButtonFormula.jsx";
import "./MainMenuStyle.css";
import SlideBarPhoto from "../Components/SlideBar/SlideBarPhoto.jsx";
import Info from "../Components/SlideBar/Information/Info.jsx";
import Avatar from "../Components/SlideBar/MyAvatar/Avatar.jsx";
import Question from "../Components/SlideBar/Question/Question.jsx";
function MainMenu() {
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
          <div className="Basic">
            <ButtonFormula label={"Basic"} />
          </div>

          <div className="Advanced">
            <ButtonFormula label={"Advanced"} />
          </div>

          <Info></Info>
          <Avatar></Avatar>
          <Question></Question>
          <div className="Physics">
            <ButtonFormula label={"Physics"} />
          </div>

          <div className="ProgrAmming">
            <ButtonFormula label={"Programming"} />
          </div>

          <div className="Algorithm">
            <ButtonFormula label={"Algorithm"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
