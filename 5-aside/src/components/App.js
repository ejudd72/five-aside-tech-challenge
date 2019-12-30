import React, { Component } from 'react';
import Header from "./Header";
import StartForm from "./StartForm";
import Pitch from "./Pitch";
import { fairSort } from "../functions/fairSort";
import { randomSort } from "../functions/randomSort";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            perTeam: 5,
            players: this.generateEmptyPlayers(10),
            randomSort: true,
            team1: [],
            team2: []
        }

        this.handleAddField = this.handleAddField.bind(this);
        this.handleRemoveField = this.handleRemoveField.bind(this);

        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleEditPlayers = this.handleEditPlayers.bind(this);
    }

    //function to generate a number of empty player objects with properties: default is 10
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
            //remove two (one per team) final empty player objects from array
            players: players.filter((_, index) => {
                return index < players.length - 2
            }), 
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

        //modifying only the skill property as a number of the player with this specific index in the players array
        newPlayers[index].skill = +e.currentTarget.value;

        //re-setting the state with a new version of this array
        this.setState({ players: newPlayers });
    }

    handleSubmit(type){
        let { players } = this.state;
    
        // filters all players have been assigned names? this is so that any blank fields submitted by the user aren't taken into account
        let truePlayers = players.filter(current => {
            return current.name !== "";
        });

        let splitTeams = {};

        if (type === "random") {
            // function will sort the players into 2 random teams and return an object with properties team1 and team2
            splitTeams = randomSort(truePlayers);
        } else {
            // function will sort the players into 2 teams based on skill level and return an object with properties team1 and team2
            splitTeams = fairSort(truePlayers);
        }

        this.setState({ 
            players: truePlayers,
            perTeam: Math.round(truePlayers.length / 2),
            submitted: true,
            team1: splitTeams.team1,
            team2: splitTeams.team2,
            randomSort: type === "random" ? true : false,
        });

    }

    handleReset() {
        this.setState({
            players: this.generateEmptyPlayers(10),
            submitted: false,
        })
    }

    handleEditPlayers() {
        this.setState({
            submitted: false,
        })
    }

 render() {
    let { players, perTeam, warning, randomSort, submitted, subs, team1, team2, } = this.state;

    return (
        <>
            <Header />

            { submitted ? null : 
                <StartForm
                    handleAddPlayer={ (e, index) => this.handleAddPlayer(e, index) }
                    handleAddSkill={ (e, index) => this.handleAddSkill(e, index) }
                    handleAddField={ this.handleAddField }
                    handleRemoveField={ this.handleRemoveField }
                    handleSubmit={ (e, type) => this.handleSubmit(e, type) }
                    perTeam={ perTeam }
                    players={ players }
                    warning={ warning }
                    randomSort={ randomSort }
                    submitted={ submitted }
                    subs={ subs }
                    reset={ this.handleReset }
                />
             } 
            { !submitted ? null : 
            <Pitch
                reset={ this.resetPlayers }
                previousPlayers={ this.previousPlayers }
                allPlayers={ players }
                team1={ team1 }
                team2={ team2 }
                randomSort={ randomSort }
                handleEditPlayers={ this.handleEditPlayers }
                /> 
            }
            </>
        )
    };
}

export default App;