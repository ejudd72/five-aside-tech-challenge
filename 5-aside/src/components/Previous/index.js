import { connect } from "react-redux";
import Previous from "./Previous";

const mapStateToProps = ({ previousTeams, showPrevious }) => {
    return {
        previousTeams,
        showPrevious
    };
  };

export default connect(mapStateToProps)(Previous);