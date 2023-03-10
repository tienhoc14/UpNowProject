const initialState = {
    email: null,
    password: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                email: action.acc.email,
                password: action.acc.password
            }

        default:
            return state
    }
}