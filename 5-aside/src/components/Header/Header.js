import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = ({ handleShowPrevious, showPrevious, showAbout, handleShowAbout }) => (
   <>
    <Jumbotron className="header mt-4 mb-0">

            <h1>5-a-Side Team Builder</h1>

        </Jumbotron>
    <div className="toggleButtonPanel">
        <button className="togglePrevious no-border" onClick={ handleShowPrevious }>{ showPrevious ? "Close Previous Teams" : "Show Previous Teams" } </button>
        <button className="togglePrevious no-border" onClick={ handleShowAbout }>{ showAbout ? "Close About" : "Show About" } </button>
    </div>
    </>
);

export default Header;