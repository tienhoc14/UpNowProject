import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters minimum.')
});

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters minimum.')
});

const ResetPwSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});

export { LoginSchema, RegisterSchema, ResetPwSchema }
