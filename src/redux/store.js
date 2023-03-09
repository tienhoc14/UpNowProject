const { combineReducers, createStore } = require("redux");
const { default: countReducer } = require("./reducers/countReducer");


const rootReducer = combineReducers({
    count: countReducer
})

export const store = createStore(rootReducer)