const initialState = {
    email: null,
    token: null,
    isLoggedIn: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                isLoggedIn: true,
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null,
                isLoggedIn: false,
            }

        default:
            return state
    }
}