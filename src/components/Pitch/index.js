import { connect } from "react-redux";
import Pitch from "./Pitch";

const mapStateToProps = ({ 
    team1, 
    team2, 
    players, 
    randomSort, 
    teamNames,
    submitted,
    showPrevious,
    showAbout,
    shirtChoice
}) => {
    return {
        team1, 
        team2, 
        allPlayers: players,
        randomSort, 
        teamNames,
        submitted,
        showPrevious,
        showAbout,
        shirtChoice
    };
  };

const mapDispatchToProps = dispatch => {
    return {
        handleEditPlayers: () => dispatch({ type: "editPlayers" }),
        handleReset: () => dispatch({ type: "reset" }),
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Pitch);