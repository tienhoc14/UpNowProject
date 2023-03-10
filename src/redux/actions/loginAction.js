export const login = (email, password) => {
    return {
        type: 'LOGIN',
        acc: {
            email: email,
            password: password
        }
    }
}