const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: countReducer } = require("./reducers/countReducer");


const rootReducer = combineReducers({
    count: countReducer
})

export const store = createStore(rootReducer)