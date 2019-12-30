import React from 'react';
import Teams from "./Teams";

import { Button } from "react-bootstrap";

const Pitch = ({ team1, team2, allPlayers, randomSort, handleEditPlayers }) => (   
    <>
    <h3>Players on pitch:</h3>
    <ul style={{ display: "flex" }}>
        { allPlayers.map((current, index) => (
            <li key={ index }>{ current.name }</li>
        ))}
    </ul>
    <h3>Sorted:</h3>
    <p>{ randomSort === true ? "Randomly" : "Based on skill level"} </p>

        <section className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <ul className="left" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 1 }
                    team={ team1 }
                /> }
            </ul>
            <ul className="right" style={{ display: "inline-block", width: "50%" }}>{ 
                <Teams
                    teamNumber={ 2 }
                    team={ team2 }
                /> }
            </ul>

            <Button
                onClick={ handleEditPlayers }> Edit Players
            </Button>

        </section>
        </>
    )
    
    

export default Pitch;