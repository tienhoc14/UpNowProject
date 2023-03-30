import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import loginReducer from "./reducers/loginReducer";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import todoReducer from "./reducers/todoReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    account: loginReducer,
    tasks: todoReducer
})

const pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)