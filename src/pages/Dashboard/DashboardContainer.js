import { connect } from "react-redux";
import Dashboard from ".";
import userActions from "../../actions";

const mapStateToProps = (state) => {
    return {
        authState: state.authState,
        user: state.user,
        userList: state.userList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(userActions.getUsersAction())
    };
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;