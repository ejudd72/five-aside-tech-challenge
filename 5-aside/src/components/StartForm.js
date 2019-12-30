import React from 'react';
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";

const StartForm = ({ 
    handleAddPlayer, 
    handleAddSkill,
    handleAddField,
    handleRemoveField,
    handleSubmit,
    players,
    submitted,
    reset
}) => (   <div className="container">
                
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
            <InputGroup>
                <label>Name</label>
                <FormControl
                    onChange={ (e) => handleAddPlayer(e, index)}
                    value={ players[index].name }
                    key={ index }
                    type="text"
                />

                <label>Name</label>
                <FormControl
                    onChange={ (e) => handleAddPlayer(e, index)}
                    value={ players[index].name }
                    key={ index }
                    type="text"
                />

            </InputGroup>
            {/* create player inputs for each objeoct in the players array currently  */}
            { submitted ? null : (
                players.map((_, index) => (
                <>
                    <h5> Player {index + 1} </h5>

                    <InputGroup key={ index }>
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
                ))
        )}
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