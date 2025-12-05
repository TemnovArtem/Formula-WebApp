import React from "react";
import "./StyleBackButton.css";
import {useNavigate} from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();
    const Back = () => {
        navigate(-1);
    };
    return (
        <div className="ButtonContainer" onClick={Back}>
            <button className={"TextButton"}>BACK</button>
        </div>
    );
};
export default BackButton;
