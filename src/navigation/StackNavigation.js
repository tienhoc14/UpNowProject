import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DrawerNavigation from './DrawerNavigation';
import { useSelector } from 'react-redux';
import ForgetPassword from '../screens/ForgetPassword';

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