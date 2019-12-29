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
        
        this.handleAddField = this.handleAddPlayer.bind(this);
        this.handleRemoveField = this.handleAddPlayer.bind(this);

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    generateEmptyPlayers(number) {
        let players = [];

        for (let i = 0; i < number; i += 1){
           players.push({ name: "", skill: "" });
        }
        return players;
    }

    handleAddField(){
        this.setState({ 
            players: this.state.players.push({ name: "", skill: "" }),
            perTeam: this.state.perTeam + 1, 
        });
        
    }

    handleRemoveField(){
        this.setState({ 
            players: this.state.players.pop(),
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
            {/* create player inputs for each empty string in the players array currently  */}
            { players.map((player, index) => (
                <>
                <InputGroup>
                <label>Player { index + 1 } Name</label>
                <FormControl
                    onChange={ (e) => this.handleAddPlayer(e, index)}
                    value={ players[index].name }
                    key={ index }
                    type="text"
                />

                <label>Player { index + 1 } Skill</label>
                <FormControl
                    onChange={ (e) => this.handleAddSkill(e, index)}
                    value={ players[index].skill }
                    key={ index }
                    type="number"
               /> 
               </InputGroup>

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