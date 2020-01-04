import React from 'react';

const Teams = ({ team, teamNumber, teamName, shirtChoice }) => (   
        <div className={ "pitch-side pitch-side-" + teamNumber}>
            <h2>{ teamName } </h2>
            {/* Images are pulled in using the pattern number attached to the shirtChoice object. Images in the public folder are saved with the same pattern numbers.  */}
            <img 
                className="team-shirt" 
                alt="football jersey icon" 
                style={{ backgroundColor: shirtChoice.colour}} 
                src={ "./jerseys/pattern" + shirtChoice.pattern + ".svg"} />
            {
                team.map((current, index) => 
                <>
                    <span className="player-individual">
                        <span className="player-name" 
                        key={ index }
                    > { current.name } </span>
                        <span className="skill-label">Skill level: { current.skill } 
                        </span>
                    </span>
                </>
                )
            }
            <p className="total-skill">Total skill level for team: {team.reduce((acc, current)=> ( acc + current.skill ), 0) } </p>
        </div>
    )

export default Teams;