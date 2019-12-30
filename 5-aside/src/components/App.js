import React, { Component } from 'react';
import Header from "./Header";
import StartForm from "./StartForm";
import Pitch from "./Pitch";
import Warning from "./Warning";
import Previous from "./Previous";
import { fairSort } from "../functions/fairSort";
import { randomSort } from "../functions/randomSort";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            perTeam: 5,
            previousTeams: [],
            players: this.generateEmptyPlayers(10),
            randomSort: true,
            teamNames: ["Team 1", "Team 2"],
            team1: [],
            team2: [],
            showPrevious: false,
            warning: false, 
            message: ""
        }

        this.handleAddField = this.handleAddField.bind(this);
        this.handleRemoveField = this.handleRemoveField.bind(this);

        this.handleAddTeamName = this.handleAddTeamName.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAcceptWarning = this.handleAcceptWarning.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleEditPlayers = this.handleEditPlayers.bind(this);
        this.handleShowPrevious = this.handleShowPrevious.bind(this);
        
        this.titleCase = this.titleCase.bind(this);

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
        let { players  } = this.state;
        this.setState({ 
            players: players.length < 40 ? [...players, { name: "", skill: 5 }, { name: "", skill: 5 }] : [...players],
            perTeam: this.state.perTeam + 1, 
        });
    }

    handleRemoveField(){
        let { players } = this.state;
        this.setState({ 
            //remove two (one per team) final empty player objects from array
            players: players.length > 2 ? players.filter((_, index) => {
                return index < players.length - 2
            }) : [...players], 
            perTeam: this.state.perTeam - 1, 
        });
    }

    handleAddTeamName(e, teamNo){
        // copy the current players array
        let newTeamNames = [...this.state.teamNames];

        newTeamNames[teamNo - 1] = e.currentTarget.value;

        //re-setting the state with a new version of this array
        this.setState({ teamNames: newTeamNames });
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
        let { players, previousTeams } = this.state;
    
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

        // validation function - to give specific message if there is a problem
        let validate = () => {
            if ( truePlayers.length < 1 ){
                return "You haven't yet added any players: please add some players and try again" 
            } else if( truePlayers.length % 2 === 1 ){
                return "You have entered an odd number of players. One team will have one extra player. Is this ok?"
            } else {
                return ""
            }
        }

        // will return true or false for validation
        let numCheck = () => {
            return truePlayers.length < 1 || truePlayers.length % 2 === 1;
        }

        this.setState({ 
            players: truePlayers,
            perTeam: Math.round(truePlayers.length / 2),
            //if no players have been added or an odd number of players has been added, user needs to accept a warning before form will be submitted
            submitted: validate() === "" ? true : false,
            team1: splitTeams.team1,
            team2: splitTeams.team2,
            previousTeams: [{
                team1Name: this.state.teamNames[0], 
                team2Name: this.state.teamNames[1],
                team1: splitTeams.team1, 
                team2: splitTeams.team2
            }, ...previousTeams],
            randomSort: type === "random" ? true : false,
            message: validate(),
            warning: numCheck(),
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

    handleShowPrevious() {
        this.setState({
            showPrevious: !this.state.showPrevious,
        })
    }

    handleAcceptWarning() {
        if (this.state.players.length >= 1) {
            this.setState({
                warning: false,
                submitted: true
            })
        } else {
            this.setState({ 
                warning: false,
            })
            this.handleReset();
        }

        
    }

    titleCase(string) {
        return string.toLowerCase().replace(string.charAt(0), string.charAt(0).toUpperCase());
    } 

 render() {
    let { players, perTeam, warning, randomSort, submitted, team1, team2, showPrevious, previousTeams, teamNames, message } = this.state;

    return (
        <>
            <Header 
                handleShowPrevious={ this.handleShowPrevious }
                showPrevious={ showPrevious }
            />
            { !showPrevious ? null : (
                <Previous
                    previousTeams={ previousTeams }
                    titleCase={ this.titleCase }
                />
            )}
            { warning ? 
                <Warning
                    warning={ message }
                    handleAcceptWarning={ this.handleAcceptWarning }
                /> : null
            }
            { submitted || showPrevious ? null : 
                <StartForm
                    // method/function props
                    handleAddPlayer={ (e, index) => this.handleAddPlayer(e, index) }
                    handleAddSkill={ (e, index) => this.handleAddSkill(e, index) }
                    handleAddTeamName={ (e, teamNo) => this.handleAddTeamName(e, teamNo)}
                    handleAddField={ this.handleAddField }
                    handleRemoveField={ this.handleRemoveField }
                    handleSubmit={ (e, type) => this.handleSubmit(e, type) }
                    reset={ this.handleReset }

                    // State-related props
                    perTeam={ perTeam }
                    players={ players }
                    warning={ warning }
                    randomSort={ randomSort }
                    submitted={ submitted }
                    teamNames={ teamNames }
                    
                />
             } 
            { !submitted || showPrevious ? null : 
            <Pitch
                reset={ this.resetPlayers }
                previousPlayers={ this.previousPlayers }
                allPlayers={ players }
                team1={ team1 }
                team2={ team2 }
                teamNames={ teamNames }
                randomSort={ randomSort }
                handleEditPlayers={ this.handleEditPlayers }
                titleCase={ this.titleCase }
                /> 
            }
            
            </>
        )
    };
}

export default App;