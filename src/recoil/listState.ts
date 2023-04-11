import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtomEffect, DefaultValue, atom, selector } from "recoil";

const persistAtom: AtomEffect<any> = ({ node, setSelf, onSet }) => {
    setSelf(
        AsyncStorage.getItem(node.key).then((savedValue) =>
            savedValue != null ? JSON.parse(savedValue) : new DefaultValue(),
        ),
    )

    onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
            AsyncStorage.removeItem(node.key)
        } else {
            AsyncStorage.setItem(node.key, JSON.stringify(newValue))
        }
    })
}

export const todoListState = atom({
    key: 'todoList',
    default: [],
    effects_UNSTABLE: [persistAtom],
})

export const deleteTask = selector({
    key: 'deleteTask',
    get: ({ get }) => {
        return get(todoListState)
    },
    set: ({ get, set }, title) => {
        const currentList = get(todoListState)
        const newTotoList = currentList.filter(task => task.title !== title)

        set(todoListState, newTotoList)
    }
})

export const updateTask = selector({
    key: 'updateTask',
    get: ({ get }) => {
        return get(todoListState)
    },
    set: ({ get, set }, { taskTitle, newTitle, completed }) => {
        const currentList = get(todoListState)
        const index = currentList.findIndex((task) => task.title === taskTitle)
        const newList = currentList.map(
            (task, i) => i === index ?
                {
                    title: newTitle,
                    completed: completed
                } : task
        )

        set(todoListState, newList)
    }
})