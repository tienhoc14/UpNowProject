import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import AppContainer from './AppContainer'
import { color } from '../assets/color'

const AppLoading = () => {
    return (
        <AppContainer>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 100,
                }}>UpNow</Text>
            </View>
            <ActivityIndicator color={color.primaryColor} size={'large'}
                style={{
                    margin: 100,
                }} />
        </AppContainer>
    )
}

export default AppLoading