import React from 'react'
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={LoginScreen}  />
                <Route path='/dashboard' exact component={DashboardScreen} />
            </Switch>
        </>
    )
}

export default App;