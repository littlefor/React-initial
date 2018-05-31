
import React from 'react';
import {connect} from 'react-redux';
import {doLogin} from '../actions/userAction';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    async _doLogin(e) {
        e.preventDefault();
        let redirect = null;
        try {
            await this.props.doLogin({...this.state});
            redirect = this.props.userInfo.redirectTo;
            if (redirect) {
                this.props.history.push(redirect);
            }
        } catch (e) {
            console.log(e);
        }
    }
    _change(attr, e) {
        this.setState({
            [attr]: e.target.value
        });
    }
    render () {
        return (
            <div className='login'>
                <form>
                    <input placeholder='user name' onChange={(e)=>{ this._change('userName', e) }}/>
                    <input type="password" placeholder='please enter you password' onChange={(e)=>{ this._change('password', e) }}/>
                    <input type='submit' value='submit' onClick={(e)=>{ this._doLogin(e)}}/>
                </form>
            </div>
        )
    }
}

Login = connect(state=>{
    return {
        userInfo: state.userReducer
    }
}, {doLogin})(Login);

export default Login;

