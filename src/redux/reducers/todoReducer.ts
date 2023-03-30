import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../actions/actionTypes";

const initialState = {
    todoList: []
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
                // todoList: []
            }

        case DELETE_TASK:
            const newTotoList = state.todoList.filter(task => task.title !== action.payload.title)
            return {
                ...state,
                todoList: newTotoList
            }

        case UPDATE_TASK:
            const index = state.todoList.findIndex((task => task.title == action.payload.title))
            return {
                ...state,
                todoList: state.todoList.map(
                    (task, i) => i === index ?
                        {
                            title: action.payload.newTitle,
                            completed: action.payload.completed
                        }
                        : task
                )
            }

        default:
            return state
    }
}