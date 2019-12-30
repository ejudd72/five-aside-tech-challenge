import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Header = ({ handleShowPrevious, showPrevious }) => (
   <>
    <Jumbotron className="header mt-4 mb-0">

            <h1>5-a-Side Team Builder</h1>

        </Jumbotron>
    <Button className="togglePrevious" onClick={ handleShowPrevious }>{ showPrevious ? "Close Previous Teams" : "Show Previous Teams" } </Button>
    </>
);

export default Header;