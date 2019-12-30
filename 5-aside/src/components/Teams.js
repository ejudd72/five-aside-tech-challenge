import React from 'react';

const Teams = ({ team, teamNumber, teamName }) => (   
        <div className={ "container pitch-side-" + teamNumber}>
            <h2>{ teamName.toUpperCase() } </h2>
            {
                team.map((current, index) => 
                <p className="player" 
                key={ index }
                // style={{ animation: `move-in ${index * 0.5}s ease-in`}}
                > { current.name } </p>
                )
            }
            
        </div>
    )

export default Teams;