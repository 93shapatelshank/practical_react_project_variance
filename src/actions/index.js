import { userConstants } from './contants';
import register from '../services/users/register';
import login from '../services/users/login';
import getUsers from '../services/users/getUsers';

const userActions = {
    loginAction,
    registerAction,
    getUsersAction,
};

export default userActions;

function loginAction(email, password) {
    return ((dispatch) => {
        dispatch(request());

        login({ email, password })
            .then(
                user => {
                    if(user){
                        dispatch(success(user.data, "loggedIn"));
                    }
                }
            );
    });

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user, authState) { return { type: userConstants.SET_LOGGED_IN_USER_DATA, user: user, authState: authState } }
}

function registerAction(user) {
    return dispatch => {
        dispatch(request(user));

        register(user)
            .then(
                user => { 
                    dispatch(success());
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
}

function getUsersAction() {
    return dispatch => {
        dispatch(request());

        getUsers()
            .then(
                user => {
                    if(user){
                        dispatch(success(user.data));
                    }
                }
            );
    };

    function request() { return { type: userConstants.GET_USERS_REQUEST } }
    function success(users) { return { type: userConstants.GET_USERS_SUCCESS, users } }
}