import React from 'react';
import { CirclePicker } from 'react-color';

const ShirtPicker = ({ teamName, teamNo, handlePatternChoice, handleColourChoice, chosenShirt }) => (
    <>
        <h3>Choose { teamName }'s kit:</h3>  
        <div class="shirt-pick-panel">
            
            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={ () => handlePatternChoice(teamNo, 1)} 
                src="./jerseys/pattern1.svg"
                style={{ backgroundColor: chosenShirt.pattern === 1 ? chosenShirt.colour : null, width: chosenShirt.pattern === 1 ? "50px" : "30px"}}
            />

            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={ () => handlePatternChoice(teamNo, 2) } 
                src="./jerseys/pattern2.svg"
                style={{ backgroundColor: chosenShirt.pattern === 2 ? chosenShirt.colour : null, width: chosenShirt.pattern === 2 ? "50px" : "30px"}}
            />

            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={() => handlePatternChoice(teamNo, 3)}  
                src="./jerseys/pattern3.svg"
                style={{ backgroundColor: chosenShirt.pattern === 3 ? chosenShirt.colour : null, width: chosenShirt.pattern === 3 ? "50px" : "30px"}}
            />

            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={() => handlePatternChoice(teamNo, 4)}
                src="./jerseys/pattern4.svg"
                style={{ backgroundColor: chosenShirt.pattern === 4 ? chosenShirt.colour : null, width: chosenShirt.pattern === 4 ? "50px" : "30px"}}
            />

            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={() => handlePatternChoice(teamNo, 5)}
                src="./jerseys/pattern5.svg"
                style={{ backgroundColor: chosenShirt.pattern === 5 ? chosenShirt.colour : null, width: chosenShirt.pattern === 5 ? "50px" : "30px"}}
            />

            <img 
                className="shirt-select"
                alt="football jersey icon"
                onClick={() => handlePatternChoice(teamNo, 6)}
                src="./jerseys/pattern6.svg"
                style={{ backgroundColor: chosenShirt.pattern === 6 ? chosenShirt.colour : null, width: chosenShirt.pattern === 6 ? "50px" : "30px"}}
            />
    </div>

        <h3>Choose { teamName }'s colour: </h3>
        <CirclePicker 
            style={{ display: "block"}}
            onChangeComplete={ (colour, event) => handleColourChoice(colour, event, teamNo)}
        />  
    </>
)
export default ShirtPicker;