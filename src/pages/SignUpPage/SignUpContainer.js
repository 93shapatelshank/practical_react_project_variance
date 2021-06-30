import { connect } from "react-redux";
import SignUp from ".";
import userActions from "../../actions";

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (user) => dispatch(userActions.registerAction(user))
    };
};

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default SignUpContainer;