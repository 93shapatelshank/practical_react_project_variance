import { connect } from "react-redux";
import SignIn from ".";
import userActions from "../../actions";

const mapStateToProps = (state) => {
    return {
        authState: state.authState,
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(userActions.loginAction(email, password))
    };
};

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default SignInContainer;