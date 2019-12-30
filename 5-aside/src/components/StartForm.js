import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Form, Alert } from "react-bootstrap";

const StartForm = ({ 
    handleAddPlayer, 
    handleAddSkill,
    handleAddField,
    handleRemoveField,
    handleSubmit,
    // perTeam,
    players,
    warning,
    randomSort,
    submitted,
    subs,
    reset
}) => (   //    warning ? (
            //    <Alert dismissable>
            //        
            //     </Alert> )
            //     : (
                <div className="container">
                    {/* { warning ? <Alert variant="danger" dismissable>You've submitted an odd number of players. Would you like to use a substitute player?
                    <Button 
                        onClick={ (e) => handleAcceptDefault(e) }>
                            Extra player on a team
                    </Button>
                    <Button 
                        onClick={ (e) => handleAcceptSubs(e) }>
                            Substitute Player
                    </Button>
                        </Alert> : null } */}
                <Button  
                    type="number"
                    onClick={ handleAddField }
                >Add more Players </Button>  

                <Button  
                    type="number"
                    onClick={ handleRemoveField }
                >Use fewer Players </Button>  

                <Form 
                    className="card" style={{ padding: 20, margin: 20 }}
                >
                {/* create player inputs for each objeoct in the players array currently  */}
                { submitted ? null : players.map((_, index) => (
                    <>
                
                    <h5> Player {index + 1} </h5>

                    <InputGroup>
                    <label>Name</label>
                    <FormControl
                        onChange={ (e) => handleAddPlayer(e, index)}
                        value={ players[index].name }
                        key={ index }
                        type="text"
                    />

                    <label>Skill</label>
                    <FormControl
                        onChange={ (e) => handleAddSkill(e, index)}
                        value={ players[index].skill }
                        type="range"
                        min="0" 
                        max="10"
                /> 
                </InputGroup>
                <hr/>
                </>
                
                ))}
            <Button 
                onClick={ () => handleSubmit("random") }
                > Sort players Randomly</Button>
            <Button 
                onClick={ () => handleSubmit("fair") }
            > Sort into 2 fair teams  </Button>
            <Button 
            variant="danger"
                onClick={ () => reset() }
            > Reset form  </Button>
            </Form>
            </div>
        )
    
    

export default StartForm;