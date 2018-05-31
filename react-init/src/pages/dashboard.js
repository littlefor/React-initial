
import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function TopNavBar(props) {
    let str = null, uri = props.currenturi;
    if (uri === '/index') {
        str = <div>导航栏</div>
    } else if(uri === '/load') {
        str = <div>充值</div>
    } else {
        str = <div>我的</div>
    }
    return str;
}

function Home() {
    return <h2>home页面</h2>
}

function Load() {
    return <h2>充值页面</h2>
}

function Me() {
    return <h2>Me页面</h2>
}

class Dashboard extends React.Component {
    render () {
        return (
            <div className="container">
                <div className='common-header'>
                    <TopNavBar currenturi={this.props.location.pathname}></TopNavBar>
                </div>
                <div className='common-body'>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/load' component={Load}></Route>
                        <Route path='/me' component={Me}></Route>
                    </Switch>
                </div>
                <ul className='common-footer'>
                    <li>
                        <Link to='/'>首页</Link>
                    </li>
                    <li>
                        <Link to='/load'>充值</Link>
                    </li>
                    <li>
                        <Link to='#'>客服</Link>
                    </li>
                    <li>
                        <Link to='/me'>我的</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Dashboard