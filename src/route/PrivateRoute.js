import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext } from '../context/authContext'
export const PrivateRoute = ({ children, ...rest }) =>{
    const auth = useContext(authContext)
    return (
      <Route
        {...rest}
        render={() =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )
        }
      />
    );
  }