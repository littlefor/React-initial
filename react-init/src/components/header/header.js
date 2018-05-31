
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Header extends React.Component {
    componentDidMount() {
       let isAuth = this.props.userInfo.isAuth;
       let {pathname} = this.props.location;
       if (!isAuth && pathname !== '/login') {
         this.props.history.push("/login");
       }
    }
    render(){
      return null
    }
}

Header = connect(state=>{
    return {
        userInfo: state.userReducer
    }
})(Header);

export default withRouter(Header);