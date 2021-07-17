import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from '../components/Header'
import HomePage from '../components/HomePage'
import SchedulerPage from '../components/SchedulerPage'

import NotFoundPage from '../components/NotFoundPage';

export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/scheduler" component={SchedulerPage} /> 
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);