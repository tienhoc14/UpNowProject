import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { color } from '../assets/color'
import AppMenu from '../components/AppMenu'

const HomeScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const account = useSelector((store) => store.account)

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        })
        navigation.replace("Login")
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={color.backgound} />

            <AppMenu />

            <View style={style.body}>
                <TouchableOpacity style={style.logoutBtn}
                    onPress={handleLogout}
                >
                    <Text style={style.logoutLabel}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.backgound,
    },
    body: {
        marginHorizontal: 24,
        position: 'absolute',
        bottom: 30,
        right: 0,
        left: 0,
    },
    logoutBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5789',
        height: 52,
        borderRadius: 30,
        marginTop: 32,
        marginBottom: 26,
    },
    logoutLabel: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: 'Outfit-Black',
        fontWeight: 800,
    },
    logoHome: {
        width: 63,
        height: 54,
        marginTop: 10,
        marginLeft: 20,
    }
})