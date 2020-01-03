import React from 'react';
import { CirclePicker } from 'react-color';

const ShirtPicker = ({ teamName, teamNo, handlePatternChoice, handleColourChoice }) => ( 
    <div className="container" style={{ display: "block", width: "50%"}}>  
        <h2>Choose { teamName }'s pattern:</h2>  
        <div class="shirt-pick-panel" style={{ display: "flex", flexWrap: "wrap" }}>
            <svg onClick={() => handlePatternChoice(teamNo, 1)} width="30px" path="./jerseys/pattern1.svg"/>
            <img onClick={() => handlePatternChoice(teamNo, 2)} width="30px" src="./jerseys/pattern2.svg"/>
            <img onClick={() => handlePatternChoice(teamNo, 3)} width="30px" src="./jerseys/pattern3.svg"/>
            <img onClick={() => handlePatternChoice(teamNo, 4)} width="30px" src="./jerseys/pattern4.svg"/>
            <img onClick={() => handlePatternChoice(teamNo, 5)} width="30px" src="./jerseys/pattern5.svg"/>
            <img onClick={() => handlePatternChoice(teamNo, 6)} width="30px" src="./jerseys/pattern6.svg"/>
        </div>
        <h2>Choose { teamName }'s colour: </h2>
        <CirclePicker 
            style={{ display: "block"}}
            onChangeComplete={ (colour, event) => handleColourChoice(colour, event, teamNo)}
        />  
    </div>
)
export default ShirtPicker;