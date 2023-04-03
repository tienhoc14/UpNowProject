import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DrawerNavigation from './DrawerNavigation';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgetPassword from '../screens/auth/ForgetPassword';
import UserInforScreen from '../screens/profile/UserInforScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    const userData = useSelector(store => store.account)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {userData.isLoggedIn ? <>
                <Stack.Screen name='Drawer' component={DrawerNavigation} />
                <Stack.Screen name='UserInfo' component={UserInforScreen} />
            </>
                : <>
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='Register' component={RegisterScreen} />
                    <Stack.Screen name='Forget' component={ForgetPassword} />
                </>
            }
        </Stack.Navigator>
    )
}

export default StackNavigation