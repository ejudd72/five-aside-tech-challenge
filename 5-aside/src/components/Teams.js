import React from 'react';

const Teams = ({ team, teamNumber, teamName, shirtChoice }) => (   
        <div className={ "pitch-side pitch-side-" + teamNumber}>
            <h2>{ teamName } </h2>
            <img className="team-shirt" alt="football jersey icon" style={{ padding: "10px", backgroundColor: shirtChoice.colour, width: "200px", border: "10px solid black", borderRadius: "50%"}} src={ "./jerseys/pattern" + shirtChoice.pattern + ".svg"} />
            {
                team.map((current, index) => 
                <>
                    <span className="player-individual">
                        <span className="player-name" 
                        key={ index }
                    // style={{ animation: `move-in ${index * 0.5}s ease-in`}}
                    > { current.name } </span>
                        <span className="skill-label">Skill level: { current.skill } 
                        </span>
                    </span>
                </>
                )
            }
            <p>Total skill level for team: {team.reduce((acc, current)=> ( acc + current.skill ), 0) } </p>
        </div>
    )

export default Teams;