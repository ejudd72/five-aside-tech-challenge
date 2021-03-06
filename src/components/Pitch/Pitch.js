import React from 'react';
import Teams from "../Teams";

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
        <ul className="all-player-list">
            { allPlayers.map((current, index) => (
                <li className="all-player-list-item" key={ index }>
                    { current.name }
                </li>
            ))}
        </ul>

        <h3>Sorted: { randomSort === true ? "Randomly" : "Based on skill level"}</h3>
        <section className="full-pitch"> 
            <Teams
                teamNumber={ 1 }
                team={ team1 }
                teamName={ teamNames[0] }
                shirtChoice={ shirtChoice[0]}
            /> 
        
            <Teams
                teamNumber={ 2 }
                team={ team2 }
                teamName={ teamNames[1] }
                shirtChoice={ shirtChoice[1]}
            />

        </section>
        <div className="button-panel">
            <button
                className="pitch button"
                onClick={ handleEditPlayers }> Edit Players
            </button>
            <button
                className="pitch button"
                onClick={ handleReset }> Reset Teams
            </button>
        </div>
        
    </div>
    )
)

export default Pitch;