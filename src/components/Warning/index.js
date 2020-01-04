import { connect } from "react-redux";
import Warning from "./Warning";

const mapStateToProps = ({ warning, message }) => {
    return { warning, message };
  };

const mapDispatchToProps = dispatch => {
    return {
      handleAcceptWarning: () => dispatch({ type: "acceptWarning" }),
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Warning);