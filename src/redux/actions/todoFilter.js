const changeFilter = (status) => {
    return {
        type: "CHANGE_FILTER",
        value: status
    }
}

export const TodoFilterActions = {
    changeFilter
}