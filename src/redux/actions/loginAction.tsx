import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig';

export const login = (email: string, password: string) => async (dispatch: any) => {
    return await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            dispatch({
                type: 'LOGIN',
                payload: {
                    email: userCredential.user.email,
                    token: userCredential.user.uid
                }
            })
            return 'success'
        })
        .catch(err => {
            return err.code
        })
};