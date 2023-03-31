import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppContainer from '../../components/AppContainer'
import AppMenu from '../../components/AppMenu'
import ToggleComponent from '../../components/ToggleComponent'

const SettingScreen = () => {
    return (
        <AppContainer>
            <AppMenu />
            <View style={styles.toggleWrapper}>
                <ToggleComponent />
            </View>
        </AppContainer>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    toggleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})