import React from 'react';

export default ({ description, timeframe, createdAt }) => (
    <div>
        <h3>Task: {description}</h3>
        <p>Timeframe: {timeframe} - Date Created: {createdAt}</p>
    </div>
)