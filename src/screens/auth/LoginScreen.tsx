import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator, SafeAreaView, Linking, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/loginAction'
import { color } from '../../assets/color'
import { Formik } from 'formik'
import { LoginSchema } from '../../assets/validation'

function LoginScreen(): JSX.Element {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (email: string, passwod: string) => {
        setIsLoading(true)

        dispatch(login(email, passwod))
            .then((res) => {
                if (res == 'success') {
                    navigation.replace('Drawer')
                } else {
                    Alert.alert('Login fail', res)
                }
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    const urlFb = 'https://www.facebook.com/'
    const urlApple = 'https://appleid.apple.com/sign-in/'

    const onLoginOther = (url: string) => useCallback(
        async () => {
            await Linking.openURL(url)
        },
        [url],
    )

    const onTogglePassword = useCallback(
        () => {
            setVisiblePassword(!visiblePassword)
        },
        [visiblePassword],
    )

    const onForgetPassword = useCallback(
        () => {
            navigation.navigate('Forget')
        },
        [],
    )

    const onSignUp = useCallback(
        () => {
            navigation.navigate('Register')
        },
        [],
    )


    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={color.backgound} />
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
                <Text style={style.bodyTitle}>Log In</Text>
                <View style={style.bodyForm}>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => handleLogin(values.email, values.password)}
                        validationSchema={LoginSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <>
                                <View style={style.inputWrapper}>
                                    <Entypo name="mail" size={20} color={color.icon} />
                                    <TextInput
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        color={'white'}
                                        placeholder='Email'
                                        placeholderTextColor={color.inputPH}
                                        style={style.input} />
                                    {errors.email && touched.email ?
                                        <Text style={style.sigupLabel}>{errors.email}</Text> : null}
                                </View>

                                <View style={style.inputWrapper}>
                                    <Fontisto name={'locked'} size={20} color={color.icon} />
                                    <TextInput
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        color={'white'}
                                        secureTextEntry={!visiblePassword}
                                        placeholder='Password'
                                        placeholderTextColor={color.inputPH}
                                        style={style.input} />
                                    <Ionicons name={visiblePassword ? "md-eye-outline" : "md-eye-off-outline"}
                                        size={24} color={color.icon} onPress={onTogglePassword} />
                                </View>
                                {errors.password && touched.password ?
                                    <Text style={style.sigupLabel}>{errors.password}</Text> : null}

                                <TouchableOpacity
                                    onPress={onForgetPassword}
                                    style={style.forgetBtn}>
                                    <Text style={style.forget}>Forget password?</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={style.loginBtn}
                                    onPress={handleSubmit}
                                >
                                    {isLoading
                                        ? <ActivityIndicator color={'white'} size='large' />
                                        : <Text style={style.loginLabel}>Log In</Text>}
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>

                    <View style={style.sigupWrapper} >
                        <Text style={style.txtSignup}> Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={onSignUp}
                            style={style.sigupBtn}><Text style={style.sigupLabel}> Sign Up</Text></TouchableOpacity>
                    </View>

                    <View style={style.loginOther}>
                        <View style={style.line} />
                        <Text style={style.txtLoginOther}>Or Log in with</Text>
                        <View style={style.line} />
                    </View>

                    <TouchableOpacity
                        onPress={onLoginOther(urlFb)}
                        style={[style.fbBtn, style.btnOther]}>
                        <MaterialIcons name="facebook" size={24} color={color.whiteColor} style={style.otherIcons} />
                        <Text style={style.fbLabel}>Log in with Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onLoginOther(urlApple)}
                        style={[style.appleBtn, style.btnOther]}>
                        <AntDesign name="apple1" size={24} color={color.whiteColor} style={style.otherIcons} />
                        <Text style={style.fbLabel}>Log in with Apple</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default LoginScreen

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
        // fontFamily: 'Outfit-Black',
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
        marginHorizontal: 24,
        marginTop: 36,
    },
    bodyTitle: {
        fontWeight: 900,
        fontSize: 24,
        color: color.whiteColor,
        alignSelf: 'flex-start',
        marginLeft: 14,
        marginBottom: 28,
    },
    inputWrapper: {
        backgroundColor: color.inputBG,
        borderRadius: 100,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    forgetBtn: {
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    forget: {
        color: color.whiteColor,
        fontSize: 15,
        fontWeight: 400,
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.primaryColor,
        height: 52,
        borderRadius: 30,
        marginTop: 32,
        marginBottom: 26,
    },
    loginLabel: {
        color: color.whiteColor,
        fontSize: 18,
        fontWeight: 800,
    },
    sigupWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 41,
    },
    sigupLabel: {
        color: color.primaryColor,
        fontWeight: 700,
        fontSize: 15
    },
    loginOther: {
        flexDirection: 'row'
    },
    line: {
        borderBottomWidth: 1,
        flex: 1,
        marginBottom: 10,
        borderColor: color.inputBG,
    },
    fbLabel: {
        fontWeight: 500,
        fontSize: 16,
        color: color.whiteColor,
    },
    btnOther: {
        height: 52,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 20,
    },
    fbBtn: {
        marginTop: 41,
        marginBottom: 18,
        backgroundColor: color.fbBG,
    },
    appleBtn: {
        backgroundColor: color.appleBG,
    },
    txtSignup: {
        color: color.whiteColor, fontSize: 15
    },
    txtLoginOther: {
        color: color.whiteColor, fontSize: 15, marginHorizontal: 16
    },
    otherIcons: {
        position: 'absolute',
        left: 20
    }
})