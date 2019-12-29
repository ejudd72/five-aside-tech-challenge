
//sort an array of player objects into 2 teams based on skill level 
let players = [
    {name: "player1", skill: -100}, 
    {name: "player2", skill: 20}, 
    {name: "player3", skill: -20}, 
    {name: "player4", skill: 4}, 
    {name: "player5", skill: 5}, 
    {name: "player6", skill: 6},
    {name: "player7", skill: 7},
    {name: "player8", skill: 7},
    {name: "player9", skill: 8},
    {name: "player10", skill: 100},
]

// this function will then return an array of player objects sorted by skill level
let sortBySkill = (array) => {
    return array.sort((a, b) => {
        if ( a.skill < b.skill ){
            return 1;
        }
        if ( a.skill > b.skill ){
            return -1;
        }
    return 0;
    })
}

let sortedPlayers = sortBySkill(players);

// best players made from the first half of the ordered 'players' array
let bestPlayers = sortedPlayers.filter((_, index) => {
    return index < sortedPlayers.length / 2;
})

// worst players made from the second half of the ordered 'players' array. 
let worstPlayers = sortedPlayers.filter((_, index) => {
    return index >= sortedPlayers.length / 2;
});

let team1 = [];
let team2 = [];

//splitting array of all players into 2 teams based on their index
let splitPlayers = (above, below) => {

    // this rearranges the lower-skilled players, puts the best of the low skilled to the end of the low skilled players array so that sorting becomes fairer when number of players per team is odd
    below.length % 2 === 1 ? below.push(below.shift()) : null;

    // take the odd-indexed players from the best players
    team1Above = above.filter((_, index) => {
        return index % 2 === 1;
    });
    // take the even-indexed players from the worst (to ensure teams are balanced in size)
    team1 = team1Above.concat(below.filter((_, index) => {
        return index % 2 === 0;
    }));

    // take even-indexed players from best players
    team2Above = above.filter((_, index) => {
        return index % 2 === 0;
    });

    // take the odd-indexed players from the worst players
    team2 = team2Above.concat(below.filter((_, index) => {
        return index % 2 === 1;
    }));
}

splitPlayers(bestPlayers, worstPlayers);

console.log("Team 1: ", team1, "Team2: ", team2);

totalTeam = (team) => team.reduce((acc, current) => acc + current.skill, 0);

console.log("team1 total: ", totalTeam(team1), "team 2 total", totalTeam(team2));
