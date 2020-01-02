import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Header = ({ handleShowPrevious, showPrevious, showAbout, handleShowAbout }) => (
   <>
    <Jumbotron className="header mt-4 mb-0">

            <h1>5-a-Side Team Builder</h1>

        </Jumbotron>
    <div className="toggleButtonPanel">
        <Button className="togglePrevious" onClick={ handleShowPrevious }>{ showPrevious ? "Close Previous Teams" : "Show Previous Teams" } </Button>
        <Button className="togglePrevious" onClick={ handleShowAbout }>{ showAbout ? "Close About" : "Show About" } </Button>
    </div>
    </>
);

export default Header;