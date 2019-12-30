import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Form, Alert } from "react-bootstrap";

const Team = ({ team, allPlayers, className, teamNumber }) => (   
        <div className={ className + " container"}>
            <h2>Team { teamNumber } </h2>
            {
                team.map((current, index) => 
                <div className="player" 
                key={ index }
                // style={{ animation: `move-in ${index * 0.5}s ease-in`}}
                > { current.name } </div>
                )
            }
            
        </div>
    )
    
    

export default Team;