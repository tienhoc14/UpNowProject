import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import AppContainer from './AppContainer'
import { color } from '../assets/color'

const AppLoading = () => {
    return (
        <AppContainer>
            <View style={styles.txtWrapper}>
                <Text style={styles.txtTitle}>UpNow</Text>
            </View>
            <ActivityIndicator color={color.primaryColor} size={'large'} style={styles.indicator} />
        </AppContainer>
    )
}

export default AppLoading

const styles = StyleSheet.create({
    txtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtTitle: {
        color: color.whiteColor,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 100,
    },
    indicator: {
        margin: 100,
    }
})