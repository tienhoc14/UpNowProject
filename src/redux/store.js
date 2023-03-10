import loginReducer from "./reducers/loginReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
    account: loginReducer
})

export const store = createStore(rootReducer)