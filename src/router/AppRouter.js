import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {LoginScreen} from "../auth/LoginScreen";
import {CalendarScreen} from '../calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route
                        exact
                        path='/login'
                        component={LoginScreen}
                    />
                    <Route
                        exact
                        path='/'
                        component={CalendarScreen}
                    />
                    <Redirect to='/login' />
                </Switch>
            </Router>
        </div>
    )
}