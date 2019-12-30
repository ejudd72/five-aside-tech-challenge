import React from 'react';

const Teams = ({ team, teamNumber }) => (   
        <div className={ "container pitch-side-" + teamNumber}>
            <h2>Team { teamNumber } </h2>
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