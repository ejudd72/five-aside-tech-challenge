import React from 'react';

const Teams = ({ team, teamNumber, teamName }) => (   
        <div className={ "container pitch-side-" + teamNumber}>
            <h2>{ teamName } </h2>
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