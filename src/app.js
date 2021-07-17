import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import "./styles/style.scss";

import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import  getVisibleTasks  from './selectors/tasks';

const store = configureStore();


const task1 = store.dispatch(addTask({ description: 'Water bill', timeframe: 200 }));

const task2 = store.dispatch(addTask({ description: 'Gas bill', timeframe: 300 }));

// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

// print visible ones to screen
const state = store.getState()
const visibleTasks = getVisibleTasks(state.tasks, state.filters);
const Tasks = () => (
    <div>
        {JSON.stringify(visibleTasks)}

    </div>

)


console.log(visibleTasks)




ReactDOM.render(<AppRouter />, document.getElementById('app'));