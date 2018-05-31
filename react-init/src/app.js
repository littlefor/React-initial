import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../src/pages/login'
import Dashboard from '../src/pages/dashboard';

class App extends React.Component {
    render() {
        return (
            <div className='app-container'>
                <Router>
                    <div className='router-container'>
                        <Switch>
                            <Route path='/' component={Dashboard}></Route>
                            <Route path='/login' component={Login}></Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;