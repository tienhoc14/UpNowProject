import { atom, selector } from "recoil";

const todoListState = atom({
    key: 'todoList',
    default: [{
        title: 'demo',
        completed: true
    }],
})

export const newListState = selector({
    key: 'addNewTask',
    get: ({ get }) => {
        const list = get(todoListState)
        return list
    },
    set: ({ get, set }, title) => {
        const list = get(todoListState)
        const newTask = {
            title: title,
            completed: false
        }

        set(todoListState, [...list, newTask])
    }
})