import React from "react";
import "./StyleAboutDeveloper.css";

const PageAboutDeveloper = () => {
  return (
    <div className="about-developer-container">
      <h1 className="aboutTitle">About Developer and his Friends</h1>

      <div className="developersGrid">
        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/Zizem.png" />
          </div>
          <h3 className="developerName">
            Zizem <span className="developerSubtitle">And carp...</span>
          </h3>
          <p className="developerDescription">Confused about the dates</p>
        </div>

        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/PavelANDgod.png" />
          </div>
          <h3 className="developerName">
            Hibro <span className="developerSubtitle">And god</span>
          </h3>
          <p className="developerDescription">Best rider on 235 MMR</p>
        </div>

        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/VladiSLAVE.png" />
          </div>
          <h3 className="developerName">VladiSLAVE</h3>
          <p className="developerDescription">Always busy</p>
        </div>

        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/Nblack.png" />
          </div>
          <h3 className="developerName">N.Black</h3>
          <p className="developerDescription">Captain proud of you</p>
        </div>

        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/Carp.png" />
          </div>
          <h3 className="developerName">Carp</h3>
          <p className="developerDescription">The best carp in the world</p>
        </div>

        <div className="developerCard">
          <div className="developerAvatar">
            <img src="src/Front/assets/Zak.png" />
          </div>
          <h3 className="developerName">Mr.shrimpskywalker</h3>
          <p className="developerDescription">Dependent on energy fluid</p>
        </div>
      </div>
    </div>
  );
};

export default PageAboutDeveloper;
