import React from 'react';

const Teams = ({ team, teamNumber, teamName, shirtChoice }) => (   
        <div className={ "container pitch-side-" + teamNumber}>
            <h2>{ teamName } </h2>
            <img alt="football jersey icon" style={{ padding: "10px", backgroundColor: shirtChoice.colour, width: "200px", border: "10px solid black", borderRadius: "50%"}} src={ "./jerseys/pattern" + shirtChoice.pattern + ".svg"} />
            {
                team.map((current, index) => 
                <>
                    <p className="player-label" 
                        key={ index }
                    // style={{ animation: `move-in ${index * 0.5}s ease-in`}}
                    > { current.name } </p>
                    <span className="skill-label">Skill level: { current.skill } 
                    </span>
                </>
                )
            }
        </div>
    )

export default Teams;