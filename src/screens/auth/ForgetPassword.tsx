import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { color } from '../../assets/color'
import { Formik } from 'formik'
import AppInput from '../../components/AppInput'
import { ResetPwSchema } from '../../assets/validation'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'

function ForgetPassword(): JSX.Element {

    const [txtSent, setTxtSent] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onHandleReset = async (email: string) => {
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setTxtSent('Check your email to reset password')
                console.log('sent to', email);
                setIsLoading(false)
            })
            .catch(err => {
                Alert.alert('Error', err.message);
                setIsLoading(false)
            })
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <View style={style.headerLogo}>
                    <Image source={require('../../assets/images/logo.png')} />
                    <View style={style.dot} />
                </View>
                <View style={style.textWrapper}>
                    <Text style={style.headerTitle}>UpNow</Text>
                    <Text style={style.headerSlogan}>Digital Hypnotherapy</Text>
                </View>
            </View>

            <View style={style.body}>
                <Text style={style.bodyTitle}>Reset password</Text>
                <Text style={{ color: color.primaryColor, marginBottom: 10, }}>{txtSent}</Text>

                <Formik
                    validationSchema={ResetPwSchema}
                    initialValues={{ email: '' }}
                    onSubmit={values => onHandleReset(values.email)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View>
                            <AppInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder='Enter your e-mail'
                            >
                                {errors.email && touched.email ?
                                    <Text style={{ color: color.primaryColor }}>{errors.email}</Text> : null}
                            </AppInput>

                            <TouchableOpacity
                                style={style.btnRegister}
                                onPress={handleSubmit}>
                                {isLoading ? <ActivityIndicator size={'large'} color={color.whiteColor} />
                                    : <Text style={style.btnLabel}>Send email</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView>
    )
}

export default ForgetPassword

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgound,
    },
    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: color.slogan,
    },
    headerLogo: {
        width: 50.35,
        height: 50.35,
        borderRadius: 79.14,
        backgroundColor: color.appLogoBG,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    dot: {
        width: 8.39,
        height: 8.39,
        backgroundColor: color.appDot,
        borderRadius: 5,
        position: 'absolute'
    },
    headerTitle: {
        fontWeight: 900,
        fontSize: 24,
        color: color.whiteColor,
    },
    headerSlogan: {
        fontWeight: 400,
        fontSize: 14.07,
        color: color.slogan,
    },
    textWrapper: {
        justifyContent: 'center'
    },
    body: {
        marginHorizontal: 32,
        marginTop: 36,
        flex: 1,
    },
    bodyTitle: {
        fontWeight: 900,
        fontSize: 24,
        color: color.whiteColor,
        alignSelf: 'flex-start',
        marginLeft: 14,
        marginBottom: 10,
    },
    btnRegister: {
        backgroundColor: color.primaryColor,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 45,
        borderRadius: 30,
        paddingHorizontal: 30,
    },
    btnLabel: {
        color: color.whiteColor,
        fontWeight: 800,
        fontSize: 18,
    },
})