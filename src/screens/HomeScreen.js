import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, SafeAreaView, } from 'react-native'
import React, { } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { color } from '../assets/color'
import AppMenu from '../components/AppMenu'
import CalendarPicker from 'react-native-calendar-picker';

const HomeScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        await dispatch({
            type: 'LOGOUT',
        })
        navigation.replace("Login")
    }

    const onDateChange = (date, type) => {
        console.log(type, ': ', date);
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={color.backgound} />
            <AppMenu />

            <View style={style.body} >
                <View style={style.streakWrapper}>
                    <View style={style.streakLogo}>
                        <Image source={require('../assets/images/steak-logo.png')} />
                    </View>

                    <View style={style.streakData}>
                        <Text style={style.streakCurrent}>Current streak: 1</Text>
                        <Text style={style.streakLongest}>Longest streak: 2</Text>
                    </View>
                </View>

                <View style={style.calendarWrapper}>
                    <CalendarPicker
                        onDateChange={onDateChange}
                        allowRangeSelection={true}
                        todayBackgroundColor={color.icon}
                        textStyle={{ color: color.whiteColor }}
                        selectedDayColor={color.primaryColor}
                    />
                </View>
            </View>

            <View style={style.logoutWrapper}>
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
        flex: 1,
        marginHorizontal: 20,
    },
    logoutWrapper: {
        marginHorizontal: 24,
    },
    logoutBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5789',
        height: 52,
        borderRadius: 30,
        marginTop: 30,
        marginBottom: 40,
    },
    logoutLabel: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 800,
    },
    streakWrapper: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#00000033',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 40,
    },
    streakLogo: {
        marginRight: 20,
    },
    streakCurrent: {
        color: color.whiteColor,
        fontWeight: 'bold',
        fontSize: 15
    },
    streakLongest: {
        color: '#828187',
        fontSize: 13,
    },
})