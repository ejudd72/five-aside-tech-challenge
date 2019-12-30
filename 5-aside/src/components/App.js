import React, { Component } from 'react';
import Header from "./Header";
import StartForm from "./StartForm";
import Teams from "./Teams";
import { fairSort } from "../functions/fairSort";
import { randomSort } from "../functions/randomSort";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            // perTeam: 5,
            players: this.generateEmptyPlayers(10),
            warning: false,
            subs: false,
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

    }

    //function to generate the number of empty player objects with properties
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
            }), //remove two final items from the array 
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
        let { players, warning, submitted } = this.state;
    
        // filters all players have been assigned names?
        let truePlayers = players.filter(current => {
            return current.name !== "";
        });

        // if the number of players in the array after it's been filtered is odd then it will equate to false; the 'warning' in this state will be triggered. 
        // let oddCheck = truePlayers.length % 2 !== 0 || players.length === 0;

        let splitTeams = {};

        if (type === "random") {
            splitTeams = randomSort(truePlayers);
        } else {
            splitTeams = fairSort(truePlayers);
        }

        console.log("players: ", truePlayers)
        console.log(" perTeam: ", Math.round(truePlayers.length / 2))
        console.log("submitted: ", true)
            // warning: oddCheck,
        console.log("team1:", splitTeams.team1)
        console.log("team2: ", splitTeams.team2)
        console.log("randomSort: ", type === "random" ? true : false)

        this.setState({ 
            players: truePlayers,
            perTeam: Math.round(truePlayers.length / 2),
            submitted: true,
            // warning: oddCheck,
            team1: splitTeams.team1,
            team2: splitTeams.team2,
            randomSort: type === "random" ? true : false,
        });

        
        // if (!warning && submitted) {
        //     handleSave({...this.state});
        // } 
    }

    handleReset() {
        this.setState({
            players: this.generateEmptyPlayers(10),
        })
    }
    // handleAcceptSubs(e) {
    //     this.setState({
    //         subs: true,
    //         warning: false,
    //     })
    // }

    // // consider using this as closing text instead
    // handleAcceptDefault(e) {
    //     this.setState({
    //         warning: false,
    //     })
    // }

 render() {
    let { players, perTeam, warning, randomSort, submitted, subs } = this.state;

    return (
        <>
            <Header />

            {/* { submitted ? null :  */}
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
            {/* } */}
            {/* { !submitted ? null : 
                <Teams 
                    allPlayers={ players }
                    // reset={ this.resetPlayers }
                    // previousPlayers={ this.previousPlayers }
                    // splitTeamsRandom={ (players) => this.splitTeamsRandom(players) }
                    // splitTeamsFair={ (players) => this.splitTeamsFair(players) }

                /> */}
            {/* } */}
            {/* } */}

            {/* refigure this bit! */}
            {/* { submitted && warning ? <Alert
                message={ this.state.players.length % 2 !== 0 ? "You've entered an odd number of players. Are you happy to add an extra player to a team?" : "You haven't entered any players - would you like to submit again?" : null } */}
            {/*        
            <hr/>
            <Loading>
                <Result/>
            </Loading> */}
        </>
        )
    };
}

export default App;