import React from "react";
import PageAnother from "../../Components/PageFormulaComponent/AnotherFormula/PageAnother.jsx";
import PageFormula from "../../Components/PageFormulaComponent/Formula/PageFormula.jsx";
import BackButton from "../../Components/ButtonBack/BackButton.jsx";
import "/src/Front/FormulasPage/Advanced/StyleAdvancedPage.css";

function ProgrammingPage() {
  return (
    <>
      <div className="background">
        <h1 className="advanced-page-title">Advanced</h1>
        <div className="advanced-page-container">
          <div className="back-button-wrapper">
            <BackButton />
          </div>

          <div className="content-wrapper">
            <PageFormula />

            <div className="another-formulas-wrapper">
              <PageAnother Name="ANOTHER FORMULA" />
              <PageAnother Name="ANOTHER FORMULA" />
              <PageAnother Name="ANOTHER FORMULA" />
              <PageAnother Name="ANOTHER FORMULA" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProgrammingPage;
