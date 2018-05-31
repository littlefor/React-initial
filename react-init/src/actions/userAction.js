
import * as types from '../common/reducer-type';

export function checkLogin() {
   
}

export function doLogin(data) {
    console.log(data);
    return dispatch=>{
        setTimeout(function(){
            console.log('login successed!');
            dispatch({
                type: types.USER_LOGIN,
                data: {
                    userName: 'paul'
                }
            })
        },100)
    }
}
