// SET_TEXT_FILTER
export const setTextFilter = (text = ' ') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_TIMEFRAME
export const sortByTimeframe = () => ({
    type: 'SORT_BY_TIMEFRAME',
})

// SORT BY_DATE
export const sortByDate = (sortBy = 'Date') => ({
    type: 'SORT_BY_DATE',
    sortBy
})


// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})