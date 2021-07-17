import { v4 as uuid } from 'uuid';

// ADD_TASK
export const addTask = (
    {
        description = '',
        note = '',
        timeframe = 0,
        createdAt = 0
    } = {}) => ({
        type: 'ADD_TASK',
        task: {
            id: uuid(),
            description,
            note,
            timeframe,
            createdAt
        }
    });


// REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    id
});


// EDIT_TASK
export const editTask = (id, updates) => ({
    type: 'EDIT_TASK',
    id,
    updates
});