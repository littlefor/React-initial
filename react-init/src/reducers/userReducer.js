
import * as types from '../common/reducer-type';

const initialState = {
    userName: '',
    isAuth: false,
    redirectTo: null
}


function userReducer(state=initialState, action) {
    switch(action.type) {
        case types.USER_LOGIN:
            return {userName: action.data.userName, isAuth: true, redirectTo: '/'}
        default:
            return initialState;
    }
}

export default userReducer;
