import React from 'react'
import LoginScreen from './screens/Login';
import DashboardScreen from './screens/Dashboard';
import ProfileScreen from './screens/Profiles'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    
    return (
        <>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={LoginScreen}  />
                <Route path='/dashboard' component={DashboardScreen} />
                <Route path='/profiles' component={ProfileScreen} />
            </Switch>
        </>
    )
}

export default App;