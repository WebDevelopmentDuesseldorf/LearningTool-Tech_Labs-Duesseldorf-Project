// Get visible Tasks

export default (tasks, { text, sortBy, startDate, endDate }) => {
    return tasks.filter((task) => {
        const startDateMatch = typeof startDate !== 'number' || task.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || task.createdAt <= endDate;
        const textMatch = text.length < 1  || task.description.toLowerCase().includes(text.toLowerCase()) === true

        // figure out if expenses.description has the text variable string inside of it

        return startDateMatch && endDateMatch && textMatch 
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } if (sortBy === 'timeframe') {
            return a.amount < b.amount ? 1 : -1 
        }
    }) 
};