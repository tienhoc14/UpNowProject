const initialState = {
    user: null,
    isLoggedIn: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }

        default:
            return state
    }
}