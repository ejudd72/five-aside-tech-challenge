import React from 'react';
import Teams from "../Teams";

import { Button } from "react-bootstrap";

const Pitch = ({ 
    team1, 
    team2, 
    allPlayers, 
    randomSort, 
    handleEditPlayers, 
    teamNames, 
    submitted, 
    showPrevious, 
    showAbout, 
    handleReset,
    shirtChoice
}) => ( 
    !submitted || showPrevious || showAbout ? null : (
    <div className="container">

        <h3>Players on pitch:</h3>
        <ul style={{ display: "flex" }}>
            { allPlayers.map((current, index) => (
                <li className="allPlayerList" key={ index }>{ current.name }</li>
            ))}
        </ul>

        <h3>Sorted: { randomSort === true ? "Randomly" : "Based on skill level"}</h3>
        <section 
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
        >
            <ul className="left" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 1 }
                    team={ team1 }
                    teamName={ teamNames[0] }
                    shirtChoice={ shirtChoice[0]}
                /> }
            </ul>
            <ul className="right" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 2 }
                    team={ team2 }
                    teamName={ teamNames[1] }
                    shirtChoice={ shirtChoice[1]}
                /> }
            </ul>

            <Button
                onClick={ handleEditPlayers }> Edit Players
            </Button>
            <Button
                onClick={ handleReset }> Reset Teams
            </Button>

        </section>
    </div>
))
    
    

export default Pitch;