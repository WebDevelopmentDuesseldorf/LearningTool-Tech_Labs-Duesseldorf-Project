import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import "./styles/style.scss";

import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import  getVisibleTasks  from './selectors/tasks';

const store = configureStore();

const task1 = store.dispatch(addTask({ description: 'Gitarre lernen', timeframe: 22000 }));
const task2 = store.dispatch(addTask({ description: 'Learn Chinese', timeframe: 12300 }));

// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('Chi'))
// store.dispatch(setTextFilter('water'))
setTimeout(() => store.dispatch(setTextFilter('i')), 5000)
// print visible ones to screen

const jsx = (
    <Provider store={store}>
        <AppRouter /> 
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));