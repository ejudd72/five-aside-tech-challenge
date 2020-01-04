import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Form } from "react-bootstrap";
import { fairSort } from "../../functions/fairSort";
import { randomSort } from "../../functions/randomSort";
import ShirtPicker from '../ShirtPicker';

class StartForm extends Component {
    constructor(props) {
        super(props);

        let perTeam = 5;

        this.state = {
            perTeam: perTeam,
            // replace with this.generateEmptyPlayers(this.state.perTeam * 2)
            players: this.generateEmptyPlayers(10),
            previousTeams: [],
            team1: [],
            team2: [],
            submitted: false,
            randomSort: true,
            teamNames: ["Team 1", "Team 2"],
            shirtChoice: [{colour: "red", pattern: 1}, {colour: "blue", pattern: 2}],
        }

        this.handleAddField = this.handleAddField.bind(this);
        this.handleRemoveField = this.handleRemoveField.bind(this);

        this.handleAddTeamName = this.handleAddTeamName.bind(this);
        this.handleAddPlayer = this.handleAddPlayer.bind(this);
        this.handleAddSkill = this.handleAddSkill.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    //function to generate a number of empty player objects with properties: default is 10
    generateEmptyPlayers(number) {
        let players = [];

        for (let i = 0; i < number; i += 1){
           players.push({ name: "", skill: 5 });
        }
        return players;
    }

    handleAddField(e){
        e.preventDefault();
        let { players  } = this.state;
        this.setState({ 
            players: players.length < 40 ? [...players, { name: "", skill: 5 }, { name: "", skill: 5 }] : [...players],
            perTeam: this.state.perTeam + 1, 
        });
    }

    titleCase(string) {
        return string.toLowerCase().replace(string.charAt(0), string.charAt(0).toUpperCase());
    } 

    handleRemoveField(e){
        e.preventDefault();
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

    handleReset(){
        this.setState({
            perTeam: 5,
            players: this.generateEmptyPlayers(this.state.perTeam * 2),
            teamNames: ["Team 1", "Team 2"],
        });
    }

    validate(players) {
        let message = "";
        let warning = false;
        let canSubmit = false;
        if ( players.length < 1 ){
            message = "You haven't added any players yet: please add some players and try again";
            warning = true;
            canSubmit = false;
        } else if( players.length % 2 === 1 ){
            message = "You have entered an odd number of players. One team will have one extra player. This will result in an unbalanced team. Is this ok?"
            warning = true;
            canSubmit = false;
        } else {
            warning = false;
            canSubmit = true;
        };

        return { warning, message, canSubmit }
    }

    handlePatternChoice(teamNo, number) {
        let newShirtChoices = [...this.state.shirtChoice];
        newShirtChoices[teamNo - 1].pattern = number;

        this.setState({ shirtChoice: newShirtChoices})
    }

    handleColourChoice(colour, event, teamNo){
        let newShirtChoices = [...this.state.shirtChoice];
        newShirtChoices[teamNo - 1].colour = colour.hex;

        this.setState({ shirtChoice: newShirtChoices})
    }

    handleSubmit(type, e){
        e.preventDefault();
        let { players } = this.state;
    
        // filters all players have been assigned names? this is so that any blank fields submitted by the user aren't put into global state. Then input is put into title case for the global state. 

        let truePlayers = players.filter(current => {
            return current.name !== "";
        }).map(current => { 
            return {...current, name: this.titleCase(current.name)}});

        let splitTeams = {};

        if (type === "random") {
            // function will sort the players into 2 random teams and return an object with properties team1 and team2
            splitTeams = randomSort(truePlayers);
        } else {
            // function will sort the players into 2 teams based on skill level and return an object with properties team1 and team2
            splitTeams = fairSort(truePlayers);
        }

        let tidyTeamNames = this.state.teamNames.map(current => this.titleCase(current))

        
        let formResults = {
            teamNames: tidyTeamNames,
            players: truePlayers,
            perTeam: Math.round(truePlayers.length / 2),
            //if no players have been added or an odd number of players has been added, user needs to accept a warning before form will be submitted
            submitted: this.validate(truePlayers).canSubmit,
            team1: splitTeams.team1,
            team2: splitTeams.team2,
            previousTeams: {
                team1Name: tidyTeamNames[0], 
                team2Name: tidyTeamNames[1],
                team1: splitTeams.team1, 
                team2: splitTeams.team2,
                shirtChoice: this.state.shirtChoice
            },
            randomSort: type === "random" ? true : false,
            message: this.validate(truePlayers).message,
            warning: this.validate(truePlayers).warning,
            shirtChoice: this.state.shirtChoice,
        }
        this.setState({ ...this.state, formResults });
        this.props.handleSave(formResults);
    }

    
render(){
    let { players, teamNames } = this.state;
    let { showAbout, showPrevious, submitted } = this.props;

    return submitted || showPrevious || showAbout ? null : ( 
        <div className="container">
        
            <h2>Team Details</h2>
            <Form 
                className="card" style={{ padding: 20, margin: 20 }}
            >
            
            <div className="team-choices team-choices-1">
                <h3><label>Choose Team 1's Name</label></h3>
                <FormControl
                    onChange={ (e) => this.handleAddTeamName(e, 1)}
                    value={ teamNames[0] }
                    type="text"
                    placeholder="Team 1"
                />
                <ShirtPicker
                    teamName={ teamNames[0] }
                    handlePatternChoice={ (teamNo, number) => this.handlePatternChoice(teamNo, number) }
                    handleColourChoice={ (colour, event) => this.handleColourChoice(colour, event, 1) }
                    teamNo={ 1 }
                    chosenShirt={ this.state.shirtChoice[0] }
                />
            </div>
            <div className="team-choices team-choices-2">
                <h3><label>Choose Team 2's Name</label></h3>
                <FormControl
                    onChange={ (e) => this.handleAddTeamName(e, 2)}
                    value={ teamNames[1] }
                    type="text"
                    placeholder="Team 2"
                />
                <ShirtPicker
                    teamName={ teamNames[1] }
                    handlePatternChoice={ (teamNo, number) => this.handlePatternChoice(teamNo, number) }
                    handleColourChoice={ (colour, event) => this.handleColourChoice(colour, event, 2) }
                    teamNo={ 2 }
                    chosenShirt={ this.state.shirtChoice[1] }
                />
            </div>
            <div className="container player-details">
            <h2>Player Details</h2> 
            <div className="buttons-panel">
                <Button  
                    type="number"
                    onClick={ (e) => this.handleAddField(e) }
                    className="add-player-button fields-button no-border"
                >Add more Players </Button>  
                
                <Button  
                    type="number"
                    onClick={ (e) => this.handleRemoveField(e) }
                    className="remove-player-button fields-button no-border"
                >Use fewer Players </Button> 
            </div>

            {/* create player inputs for each empty object in the players array currently  */}
 
            { submitted ? null : (
                players.map((_, index) => (
                <>
                    
                    
                    <InputGroup key={ index }>
                    <h5> Player {index + 1} </h5>
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
                        type="range"
                        min="0" 
                        max="10"
                    /> 
                    
                    </InputGroup>
                    <hr/>
                </>
                ))
        ) }
            <div className="button-panel">
                <Button 
                    className="button no-border"
                    onClick={ (e) => this.handleSubmit("random", e) }
                    
                    > Sort players Randomly</Button>
                <Button 
                    className="button no-border"
                    onClick={ (e) => this.handleSubmit("fair", e) }
                > Sort into 2 fair teams  </Button>
                <Button 
                    className="button no-border"
                    variant="danger"
                    onClick={ () => this.handleReset() }
                > Reset form  </Button>
            </div>
        </div>
    </Form>
    </div>
    )};
}
    
export default StartForm;