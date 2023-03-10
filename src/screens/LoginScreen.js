import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions/loginAction'
import { color } from '../assets/color'

const LoginScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [txtPassword, setTxtPassword] = useState()
    const [txtEmail, setTxtEmail] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async () => {
        setIsLoading(true)

        dispatch(login(txtEmail, txtPassword))
            .then((res) => {
                if (res == 'success') {
                    navigation.replace('Home')
                } else {
                    alert('Wrong email or password')
                }
                setIsLoading(false)
            })
            .catch((err) => console.log(err))
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#2D3748CC'} />
            <View style={style.header}>
                <View style={style.headerLogo}>
                    <Image source={require('../assets/images/logo.png')} />
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
                    <View style={style.inputWrapper}>
                        <Entypo name="mail" size={20} color="#A4BCC1" />
                        <TextInput
                            onChangeText={setTxtEmail}
                            value={txtEmail}
                            color={'white'}
                            placeholder='Email'
                            placeholderTextColor={'#828187'}
                            style={style.input} />
                    </View>

                    <View style={style.inputWrapper}>
                        <Fontisto name={'locked'} size={20} color={color.icon} style={{ marginLeft: 5, }} />
                        <TextInput
                            onChangeText={setTxtPassword}
                            value={txtPassword}
                            color={'white'}
                            secureTextEntry={visiblePassword ? false : true}
                            placeholder=' Password'
                            placeholderTextColor={'#828187'}
                            style={style.input} />
                        <Ionicons name={visiblePassword ? "md-eye-outline" : "md-eye-off-outline"}
                            size={24} color="#A4BCC1" onPress={() => setVisiblePassword(!visiblePassword)} />
                    </View>

                    <TouchableOpacity style={style.forgetBtn}>
                        <Text style={style.forget}>Forget password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.loginBtn}
                        onPress={handleLogin}
                    >
                        {isLoading
                            ? <ActivityIndicator color={'white'} size='large' />
                            : <Text style={style.loginLabel}>Log In</Text>}
                    </TouchableOpacity>

                    <View style={style.sigupWrapper} >
                        <Text style={{ color: '#FFFFFF', fontSize: 15 }}> Don't have an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                            style={style.sigupBtn}><Text style={style.sigupLabel}> Sign Up</Text></TouchableOpacity>
                    </View>

                    <View style={style.loginOther}>
                        <View style={style.line} />
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginHorizontal: 16 }}>Or Log in with</Text>
                        <View style={style.line} />
                    </View>

                    <TouchableOpacity style={[style.fbBtn, style.btnOther]}>
                        <MaterialIcons name="facebook" size={24} color="#FFFFFF" style={{ position: 'absolute', left: 20 }} />
                        <Text style={style.fbLabel}>Log in with Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[style.appleBtn, style.btnOther]}>
                        <AntDesign name="apple1" size={24} color="#FFFFFF" style={{ position: 'absolute', left: 20 }} />
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
        borderBottomColor: '#2D8CFF',
    },
    headerLogo: {
        width: 50.35,
        height: 50.35,
        borderRadius: 79.14,
        backgroundColor: '#343542',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    dot: {
        width: 8.39,
        height: 8.39,
        backgroundColor: '#57C1EA',
        borderRadius: 5,
        position: 'absolute'
    },
    headerTitle: {
        fontFamily: 'Outfit-Black',
        fontWeight: 900,
        fontSize: 24,
        color: color.whiteColor,
    },
    headerSlogan: {
        fontFamily: 'Outfit-Black',
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
        fontFamily: 'Outfit-Black',
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
        fontFamily: 'Outfit-Black',
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
        borderColor: '#00000033',
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
        backgroundColor: '#3F60B2',
    },
    appleBtn: {
        backgroundColor: '#131416',
    }
})