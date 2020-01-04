import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = ({ showPrevious, showAbout }) => {
    return {
        showPrevious,
        showAbout
    };
  };

const mapDispatchToProps = dispatch => {
    return {
      handleShowPrevious: () => dispatch({ type: "showPrevious" }),
      handleShowAbout: () => dispatch({ type: "showAbout" }),

  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);