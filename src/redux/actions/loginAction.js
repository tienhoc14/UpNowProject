import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    return await axios.get('https://httpbin.org/basic-auth/admin/123',
        {
            auth: {
                username: email,
                password: password,
            }
        })
        .then(res => {
            console.log(res.status)
            dispatch({
                type: 'LOGIN',
                payload: res.data,
            });
            return 'success'
        })
        .catch(err => {
            console.log(err)
        })
};