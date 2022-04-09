const initialFilter = "all"

const todoFilter = (state = initialFilter, action) => {
    switch (action.type) {
        case "CHANGE_FILTER": {
            return action.value
        }

        default:
            return state
    }
}

export default todoFilter