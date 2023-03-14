import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ReminderScreen from '../screens/ReminderScreen'
import SettingScreen from '../screens/SettingScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName='Home' >
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='Reminder' component={ReminderScreen} />
            <Drawer.Screen name='Setting' component={SettingScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation