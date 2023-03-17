const initialState = {
    user: null,
    isLoggedIn: false,
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                token: 'logged-in-upnow'
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
                token: null
            }

        default:
            return state
    }
}