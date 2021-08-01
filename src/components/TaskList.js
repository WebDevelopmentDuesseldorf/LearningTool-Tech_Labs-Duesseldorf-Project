import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem'
import selectTasks from '../selectors/tasks'

const TaskList = (props) => (
    <div>
        <h2>Task List</h2>
        {props.tasks.map((task) => {
            return <TaskListItem key={task.id}{...task} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        tasks: selectTasks(state.tasks, state.filters)
    };
}

export default connect(mapStateToProps)(TaskList)