export const randomSort = (players) => {
    // function to shuffle an array randomly - fischer-yates
    let shuffle = (players) => {
        for(let i = players.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * i)
            const temp = players[i]
            players[i] = players[j]
            players[j] = temp
        }
        return players;
    }

    let shuffled = shuffle(players);

    //split the shuffled array into 2 halves
    let team1 = (shuffled) => shuffled.filter((_, index) => {
        return index < shuffled.length / 2 ;
    }) 

    let team2 = (shuffled) => shuffled.filter((_, index) => {
        return index >= shuffled.length / 2;
    }) 

    return { team1: team1(shuffled), team2: team2(shuffled)};
}