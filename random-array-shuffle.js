//random shuffle 
let players = [
    {name: "player1", skill: 1}, 
    {name: "player2", skill: 1}, 
    {name: "player3", skill: 2}, 
    {name: "player4", skill: 2}, 
    {name: "player5", skill: 5}, 
    {name: "player6", skill: 5},
    {name: "player7", skill: 9},
    {name: "player8", skill: 9},
    {name: "player9", skill: 2},
    {name: "player10", skill: 2},
]

// function to shuffle an array randomly - fischer-yates
let shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

//split this array of objects into an array of just names
let shuffledNames = shuffle(players).map(current => current.name);

//split the shuffled array into 2 halves
let team1 = (array) => array.filter((_, index) => {
  return index < array.length / 2 ;
}) 

let team2 = (array) => array.filter((_, index) => {
    return index >= array.length / 2;
}) 

console.log(team1(shuffledNames));
console.log(team2(shuffledNames));
