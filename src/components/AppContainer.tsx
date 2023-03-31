import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { color } from '../assets/color'

const AppContainer = ({ children }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: color.backgound,
        }}>
            <StatusBar barStyle={'light-content'} />
            {children}
        </SafeAreaView>
    )
}

export default AppContainer