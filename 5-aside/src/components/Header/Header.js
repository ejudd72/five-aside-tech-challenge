import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = ({ handleShowPrevious, showPrevious, showAbout, handleShowAbout }) => (
   <>
   <div className="button-panel header-buttons">
        <button 
            onClick={ handleShowPrevious }
        >
            { showPrevious ? "Close Previous Teams" : "Show Previous Teams" } 
        </button>
        <button 
            onClick={ handleShowAbout }>
                { showAbout ? "Close About" : "Show About" }</button>
    </div>

    <Jumbotron className="header mt-4 mb-0">
        <h1>5-a-Side Team Builder</h1>
    </Jumbotron>
    </>
);

export default Header;