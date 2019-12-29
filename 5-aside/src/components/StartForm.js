import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";

class GameStart extends Component {
    //constructor should always contain props and superprops
    constructor(props){
        super(props);
        
        this.state = {
            submitted: false,
            perTeam: 5,
            players: this.generateEmptyPlayers(10),
        }
        
        this.handleAddField = this.handleAddField.bind(this);
        this.handleRemoveField = this.handleRemoveField.bind(this);

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // this function creates empty player objects 
    generateEmptyPlayers(number) {
        let players = [];

        for (let i = 0; i < number; i += 1){
           players.push({ name: "", skill: 5 });
        }
        return players;
    }

    handleAddField(){
        this.setState({ 
            players: [...this.state.players, { name: "", skill: 5 }, { name: "", skill: 5 }],
            perTeam: this.state.perTeam + 1, 
        });
    }

    handleRemoveField(){
        let { players } = this.state;
        this.setState({ 
            players: players.filter((_, index) => {
                return index < players.length - 2
            }), //remove twofinal items from the array
            perTeam: this.state.perTeam - 1, 
        });
    }

    handleAddPlayer(e, index){
        // copy the current players array
        let newPlayers = [...this.state.players];
        //modifying only the name property of the player with this specific index in the players array
        newPlayers[index].name = e.currentTarget.value;

        //re-setting the state with a new version of this array
        this.setState({ players: newPlayers });
    }

    handleAddSkill(e, index){
        // copy the current players array
        let newPlayers = [...this.state.players];
        //modifying only the skill property of the player with this specific index in the players array
        newPlayers[index].skill = +e.currentTarget.value;
        //re-setting the state with a new version of this array
        this.setState({ players: newPlayers });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ submitted: true });
        this.props.handleSave({...this.state});
    }

    render() {
        let { submitted, players } = this.state;

        return (
            submitted ? null : ( 
            <div className="container">
            <Button  
                type="number"
                onClick={ this.handleAddField }
            >Add more Players </Button>  

            <Button  
                type="number"
                onClick={ this.handleRemoveField }
            >Use fewer Players </Button>  

            <Form 
                onSubmit={ this.handleSubmit }
                className="card" style={{ padding: 20, margin: 20 }}
            >
            {/* create player inputs for each objeoct in the players array currently  */}
            { players.map((player, index) => (
                <>
            
                <h5> Player {index + 1} </h5>

                <InputGroup>
                <label>Name</label>
                <FormControl
                    onChange={ (e) => this.handleAddPlayer(e, index)}
                    value={ players[index].name }
                    key={ index }
                    type="text"
                />

                <label>Skill</label>
                <FormControl
                    onChange={ (e) => this.handleAddSkill(e, index)}
                    value={ players[index].skill }
                    key={ index }
                    type="range"
                    min="0" 
                    max="10"
               /> 
               </InputGroup>
               <hr/>
               </>
               
            ))}
                <Button 
                    type="submit"
                >Save Players</Button>
                </Form>
                </div>
            )
        )
    }
}

export default GameStart;