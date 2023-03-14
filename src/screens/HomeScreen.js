import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

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
            <StatusBar backgroundColor={'#2D3748CC'} />


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
})