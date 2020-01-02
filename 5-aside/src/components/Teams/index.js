import { connect } from "react-redux";
import Teams from "../Teams";

const mapStateToProps = ({ 
    team1, 
    team2, 
    players, 
    randomSort
}) => {
    return {
        team1, 
        team2, 
        allPlayers: players, 
        randomSort
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      handleEditPlayers: () => dispatch({ type: "editPlayers" }),
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);