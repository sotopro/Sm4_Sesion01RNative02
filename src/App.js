import React from 'react'
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    
    return (
        <div className="app">
            <Switch>
                <Route path='/' exact component={LoginScreen}  />
                <Route path='/dashboard' exact component={DashboardScreen} />
            </Switch>
        </div>
    )
}

export default App;