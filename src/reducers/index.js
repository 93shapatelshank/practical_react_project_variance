import { userConstants } from '../actions/contants';

const initState = {
    user: {},
    authState: "",
    userList: []
}
function users(state = { initState }, action) {
    switch (action.type) {
        case userConstants.SET_LOGGED_IN_USER_DATA:
            return {
                ...state,
                user: action.user,
                authState: action.authState
            };
        case userConstants.GET_USERS_SUCCESS:
            return {
                ...state,
                userList: action.users
            };
        default:
            return state
    }
}

export default users;