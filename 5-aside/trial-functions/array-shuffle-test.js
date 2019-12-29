//random shuffle 
let numbers = [1, 2, 3, 4, 5];
let players = [{name: "player1", skill: "2"}, {name: "player2", skill: "4"}, {name: "player3", skill: "9"}, {name: "player4", skill: "20"}, {name: "player5", skill: "2"}, {name: "player6", skill: "2"}]

//passing objects in, reducing to just an array of names
let names = players.map(current => current.name);

let shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

let shuffledPlayers = shuffle(players);
let shuffledNames = shuffledPlayers.map(current => current.name);

//split the shuffled array into 2 halves
let team1 = (array) => array.filter((_, index) => {
  return index < array.length / 2 ;
}) 

let team2 = (array) => array.filter((_, index) => {
    return index >= array.length / 2;
}) 

console.log(team1(shuffledNames));
console.log(team2(shuffledNames));

// console.log(`all players ` + shuffledNames + " Team 1: " + team1(shuffledNames) +  " Team 2: " + team2(shuffledNames));
