export const fairSort = (players) => {

// this function will then return an array of player objects sorted by skill level
    
let sortBySkill = (players) => {
        return players.sort((a, b) => {
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
        if (below.length % 2 === 1){
            below.push(below.shift())
        }
        
        // take the odd-indexed players from the best players
        let team1Above = above.filter((_, index) => {
            return index % 2 === 1;
        });
        // take the even-indexed players from the worst (to ensure teams are balanced in size)
        team1 = team1Above.concat(below.filter((_, index) => {
            return index % 2 === 0;
        }));

        // take even-indexed players from best players
       let team2Above = above.filter((_, index) => {
            return index % 2 === 0;
        });

        // take the odd-indexed players from the worst players
        team2 = team2Above.concat(below.filter((_, index) => {
            return index % 2 === 1;
        }));
    }

    splitPlayers(bestPlayers, worstPlayers);

    console.log("split fairly!");
    return { team1: team1, team2: team2 }
}