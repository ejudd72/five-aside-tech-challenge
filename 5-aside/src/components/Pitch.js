import React from 'react';
import Teams from "./Teams";

import { Button } from "react-bootstrap";

const Pitch = ({ team1, team2, allPlayers, randomSort, handleEditPlayers, teamNames, titleCase }) => (   
    <>
    <h3>Players on pitch:</h3>
    <ul style={{ display: "flex" }}>
        { allPlayers.map((current, index) => (
            <li key={ index }>{ titleCase(current.name) }</li>
        ))}
    </ul>
    <h3>Sorted:</h3>
    <p>{ randomSort === true ? "Randomly" : "Based on skill level"} </p>

        <section className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <ul className="left" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 1 }
                    team={ team1 }
                    teamName={ teamNames[0] }
                    titleCase={ titleCase }
                /> }
            </ul>
            <ul className="right" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 2 }
                    team={ team2 }
                    teamName={ teamNames[1] }
                    titleCase={ titleCase }
                /> }
            </ul>

            <Button
                onClick={ handleEditPlayers }> Edit Players
            </Button>

        </section>
        </>
    )
    
    

export default Pitch;