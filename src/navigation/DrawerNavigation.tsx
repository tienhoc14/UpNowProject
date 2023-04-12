import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../components/CustomDrawer'

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { color } from '../assets/color'
import HomeScreen from '../screens/home/HomeScreen'
import ReminderScreen from '../screens/reminder/ReminderScreen'
import SettingScreen from '../screens/settings/SettingScreen'
import RewardsScreen from '../screens/rewards/RewardsScreen'
import ChatScreen from '../screens/chat/ChatScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Send a testimonial'
            screenOptions={{
                headerShown: false,
                overlayColor: 'transparent',
                drawerLabelStyle: { marginLeft: -10 },
                drawerActiveBackgroundColor: color.inputBG,
                drawerActiveTintColor: color.drawerActive,
                drawerInactiveTintColor: color.drawerInactive,
            }}
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name='Home' component={HomeScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <SimpleLineIcons name="home" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Reminder' component={ReminderScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <SimpleLineIcons name="bell" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Invite your friends' component={SettingScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Ionicons name="person-outline" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Send a testimonial' component={ChatScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Fontisto name="email" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Welcome video' component={SettingScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Octicons name="video" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Rewards' component={RewardsScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Feather name="award" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Help & Support' component={SettingScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Ionicons name="md-help-circle-outline" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Setting' component={SettingScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Feather name="settings" size={size} color={color} />
                }
            }} />
            <Drawer.Screen name='Disclaimer' component={SettingScreen} options={{
                drawerIcon: ({ color, size }) => {
                    return <Ionicons name="warning-outline" size={size} color={color} />
                }
            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation