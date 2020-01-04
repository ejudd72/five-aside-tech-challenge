import { connect } from "react-redux";
import About from "./About";

const mapStateToProps = ({ showAbout }) => {
    return {
        showAbout,
    };
};

export default connect(mapStateToProps)(About);