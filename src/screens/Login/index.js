import React, { useState, useEffect } from 'react'
import configFire from '../../configFire'
import Profiles from '../../components/Profiles'
import Login from '../../components/Login'

const LoginScreen = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState('')
    const handleLogin = () => {
        configFire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message)
                        break;
                    case 'auth/wrong-password': 
                        setPasswordError(err.message)
                        break
                    default: 
                        setEmailError('Something went wrong!')
                }
            })
    }
    const handleSignUp = () => {
        configFire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code) {
                    case 'auth/email-already-use':
                    case 'auth/invalid-email':
                        setEmailError(err.message)
                        break;
                    case 'auth/weak-password': 
                        setPasswordError(err.message)
                        break
                    default: 
                        setEmailError('Something went wrong!')
                }
            })
    }

    const authListener = () => {
        configFire.auth().onAuthStateChanged(user => {
            if(user) {
                setUser(user)
            } else {
                setUser('')
            }
        })
    }

    useEffect(() => {
        authListener();
    }, [user])
    return (
        <div className="app">
            <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />
        </div>
    )
}

export default LoginScreen;