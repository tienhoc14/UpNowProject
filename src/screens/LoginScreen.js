import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const navigation = useNavigation()

    const [visiblePassword, setVisiblePassword] = useState(false)
    const [txtPassword, setTxtPassword] = useState()
    const [txtEmail, setTxtEmail] = useState()

    const handleLogin = () => {
        if (txtEmail == 'admin' && txtPassword == '123') {
            navigation.navigate('Home')
        } else {
            alert('Email or password was incorrect!')
        }
    }

    return (
        <View style={style.container}>
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
                            style={style.input}>
                        </TextInput>
                    </View>

                    <View style={style.inputWrapper}>
                        <Fontisto name={visiblePassword ? 'unlocked' : 'locked'} size={20} color="#A4BCC1"
                            onPress={() => setVisiblePassword(!visiblePassword)} />
                        <TextInput
                            onChangeText={setTxtPassword}
                            value={txtPassword}
                            color={'white'}
                            secureTextEntry={visiblePassword ? false : true}
                            placeholder=' Password'
                            placeholderTextColor={'#828187'}
                            style={style.input}>
                        </TextInput>
                    </View>

                    <TouchableOpacity style={style.forgetBtn}>
                        <Text style={style.forget}>Forget password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.loginBtn}
                        onPress={handleLogin}
                    >
                        <Text style={style.loginLabel}>Log In</Text>
                    </TouchableOpacity>

                    <View style={style.sigupWrapper} >
                        <Text style={{ color: '#FFFFFF', fontSize: 15 }}> Don't have an account? </Text>
                        <TouchableOpacity style={style.sigupBtn}><Text style={style.sigupLabel}> Sign Up</Text></TouchableOpacity>
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

        </View>
    )
}

export default LoginScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2D3748CC',
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
        color: '#FFFFFF',
    },
    headerSlogan: {
        fontFamily: 'Outfit-Black',
        fontWeight: 400,
        fontSize: 14.07,
        color: '#2D8CFF',
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
        color: '#FFFFFF',
        alignSelf: 'flex-start',
        marginLeft: 14,
        marginBottom: 28,
    },
    inputWrapper: {
        backgroundColor: '#00000033',
        borderRadius: 100,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
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
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 400,
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5789',
        height: 52,
        borderRadius: 30,
        marginTop: 32,
        marginBottom: 26,
    },
    loginLabel: {
        color: '#FFFFFF',
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
        color: '#FF5889',
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
        color: '#FFFFFF',
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