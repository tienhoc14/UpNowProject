import AsyncStorage from "@react-native-async-storage/async-storage";
import { AtomEffect, DefaultValue, atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

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

export const newListState = selector({
    key: 'newList',
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