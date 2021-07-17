import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <header>
        <h1>Navigation</h1>
            <NavLink to="/" exact={true} activeClassName="is-active"> Home </NavLink>
            <NavLink to="/scheduler" activeClassName="scheduler"> Scheduler </NavLink>
    </header>
)