
//shuffle an array of objects based on skill level 
let players = [
    {name: "player1", skill: 1}, 
    {name: "player2", skill: 1}, 
    {name: "player3", skill: 2}, 
    {name: "player4", skill: 5}, 
    {name: "player5", skill: 5}, 
    {name: "player6", skill: 5},
    {name: "player7", skill: 5},
    {name: "player8", skill: 5},
    {name: "player9", skill: 5},
    {name: "player10", skill: 2},
]

// this function will then return an array of player objects sorted by skill level
let sortBySkill = (array) => {
    return array.sort((a, b) => {
        if ( a.skill < b.skill ){
            return -1;
        }
        if ( a.skill > b.skill ){
            return 1;
        }
    return 0;
    })
}

// best players appear at beginning of array
let bestPlayers = (players) => players.filter((_, index) => {
    return index < players.length / 2;
})

// worse players appear at end of array. Reversed so that  
let worstPlayers = (players) => players.filter((_, index) => {
    return index >= players.length / 2;
}).reverse();

let team1 = [];
let team2 = [];

//splitting array of all players into 2 teams based on their index
let splitPlayers = (above, below) => {
    let both = [...above, ...below];

    team1 = both.filter((_, index) => {
        return index % 2 === 0;
    });

    team2 = both.filter((_, index) => {
        return index % 2 === 1;
    });
}

let all = sortBySkill(players);

splitPlayers(bestPlayers(all), worstPlayers(all));

console.log(team1, team2);