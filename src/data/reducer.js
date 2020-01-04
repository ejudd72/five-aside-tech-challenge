import initial from "./initial";

const reducer = (state, action) => {

  const reset = (state) => {
      return {
      ...initial, 
      previousTeams: state.previousTeams,
    }
  }

  const submitPlayers = (state, { 
      team1, 
      team2, 
      players, 
      perTeam, 
      teamNames, 
      previousTeams, 
      randomSort, 
      submitted,
      warning,
      message,
      shirtChoice
    }) => {
      return { 
        ...state, 
        team1, 
        team2, 
        players, 
        perTeam, 
        teamNames, 
        previousTeams: [{ 
          team1Name: previousTeams.team1Name, 
          team2Name: previousTeams.team2Name, 
          team1: previousTeams.team1, 
          team2: previousTeams.team2, 
          shirtChoice: previousTeams.shirtChoice,
        }, ...state.previousTeams], 
        randomSort, 
        submitted,
        warning,
        message,
        shirtChoice
    }
  };

  const editPlayers = (state) =>  { 
    return  { 
      ...state, 
      submitted: false,
    } 
  };

  const acceptWarning = (state) =>  { 
    return  { 
      ...state, 
      warning: false,
      message: "",
      submitted: state.players.length > 1 ? true : false,
    } 
  };

  const showAbout =  (state) =>  { 
    return  { 
      ...state, 
      showAbout: !state.showAbout,
    } 
  };

  const showPrevious =  (state) =>  { 
    return  { 
      ...state, 
      showPrevious: !state.showPrevious,
    } 
  };


   switch (action.type) {
    case "showPrevious": return showPrevious(state);
    case "showAbout": return showAbout(state); 
    case "acceptWarning": return acceptWarning(state, action);
    case "editPlayers": return editPlayers(state, action);
    case "submitPlayers": return submitPlayers(state, action);
    case "reset": return reset(state, action);
    default: return state;
 } };

export default reducer;