import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "./actionTypes"

export const addTask = (title: string) => {
    return {
        type: ADD_TASK,
        payload: {
            title: title,
            completed: false
        }
    }
}

export const deleteTask = (title: string) => {
    return {
        type: DELETE_TASK,
        payload: {
            title
        }
    }
}

export const updateTask = (title: string, newTitle: string, completed: boolean) => {
    return {
        type: UPDATE_TASK,
        payload: {
            title: title,
            newTitle: newTitle,
            completed: completed
        }
    }
}