// //function to generate a number of empty player objects with properties: default is 10
    // generateEmptyPlayers(number) {
    //     let players = [];

    //     for (let i = 0; i < number; i += 1){
    //        players.push({ name: "", skill: 5 });
    //     }
    //     return players;
    // }


export const editPlayers = ({ state }) => ({
    type: "editPlayers",
    submitted: false,
})

export const acceptWarning = ({ players, submitted }) => ({
    type: "acceptWarning",
    warning: false,
    message: "",
    submitted: players.length > 1 ? true : false,
})

export const showPrevious = ({ showPrevious }) => ({
    type: "showPrevious",
    showPrevious: !showPrevious,
})

export const showAbout = ({ showAbout }) => ({
    type: "showAbout",
    showAbout: !showAbout,
})

export const submitPlayers = ({  
    team1, 
    team2, 
    players, 
    perTeam, 
    teamNames, 
    previousTeams, 
    randomSort, 
    submitted, 
    warning, 
    message
}) => ({
    type: "submitPlayers", 
    team1, 
    team2, 
    players, 
    perTeam, 
    teamNames, 
    previousTeams,
    randomSort, 
    submitted,
    warning,
    message
})

    // handleAddTeamName(e, teamNo){
    //     // copy the current players array
    //     let newTeamNames = [...this.state.teamNames];

    //     newTeamNames[teamNo - 1] = e.currentTarget.value;

    //     //re-setting the state with a new version of this array
    //     this.setState({ teamNames: newTeamNames });
    // }

    // handleAddPlayer(e, index){
    //     // copy the current players array
    //     let newPlayers = [...this.state.players];

    //     //modifying only the name property of the player with this specific index in the players array
    //     newPlayers[index].name = e.currentTarget.value;

    //     //re-setting the state with a new version of this array
    //     this.setState({ players: newPlayers });
    // }

    // handleAddSkill(e, index){
    //     // copy the current players array
    //     let newPlayers = [...this.state.players];

    //     //modifying only the skill property as a number of the player with this specific index in the players array
    //     newPlayers[index].skill = +e.currentTarget.value;

    //     //re-setting the state with a new version of this array
    //     this.setState({ players: newPlayers });
    // }

    // handleSubmit(type){
    //     let { players, previousTeams } = this.state;
    
    //     // filters all players have been assigned names? this is so that any blank fields submitted by the user aren't taken into account
    //     let truePlayers = players.filter(current => {
    //         return current.name !== "";
    //     });

    //     let splitTeams = {};

    //     if (type === "random") {
    //         // function will sort the players into 2 random teams and return an object with properties team1 and team2
    //         splitTeams = randomSort(truePlayers);
    //     } else {
    //         // function will sort the players into 2 teams based on skill level and return an object with properties team1 and team2
    //         splitTeams = fairSort(truePlayers);
    //     }

    //     // validation function - to give specific message if there is a problem
    //     let validate = () => {
    //         if ( truePlayers.length < 1 ){
    //             return "You haven't yet added any players: please add some players and try again" 
    //         } else if( truePlayers.length % 2 === 1 ){
    //             return "You have entered an odd number of players. One team will have one extra player. Is this ok?"
    //         } else {
    //             return ""
    //         }
    //     }

    //     // will return true or false for validation
    //     let numCheck = () => {
    //         return truePlayers.length < 1 || truePlayers.length % 2 === 1;
    //     }

    //     this.setState({ 
    //         players: truePlayers,
    //         perTeam: Math.round(truePlayers.length / 2),
    //         //if no players have been added or an odd number of players has been added, user needs to accept a warning before form will be submitted
    //         submitted: validate() === "" ? true : false,
    //         team1: splitTeams.team1,
    //         team2: splitTeams.team2,
    //         previousTeams: [{
    //             team1Name: this.state.teamNames[0], 
    //             team2Name: this.state.teamNames[1],
    //             team1: splitTeams.team1, 
    //             team2: splitTeams.team2
    //         }, ...previousTeams],
    //         randomSort: type === "random" ? true : false,
    //         message: validate(),
    //         warning: numCheck(),
    //     });

    // }

    // handleReset() {
    //     this.setState({
    //         players: this.generateEmptyPlayers(10),
    //         submitted: false,
    //     })
    // }

    // handleEditPlayers() {
    //     this.setState({
    //         submitted: false,
    //     })
    // }

    // handleShowPrevious() {
    //     this.setState({
    //         showPrevious: !this.state.showPrevious,
    //     })
    // }

    // handleShowAbout() {
    //     this.setState({
    //         showAbout: !this.state.showAbout,
    //     })
    // }

 

    // titleCase(string) {
    //     return string.toLowerCase().replace(string.charAt(0), string.charAt(0).toUpperCase());
    // } 