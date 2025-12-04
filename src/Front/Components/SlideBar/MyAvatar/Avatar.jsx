import React from "react";
import "./AvatarStyle.css";
import AVATAR from "../../../assets/Profile.png";

function Avatar() {
  return (
    <button className="AvatarTopRight">
      <img src={AVATAR} className="BarLine" />
    </button>
  );
}

export default Avatar;
