import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppContainer from '../../components/AppContainer'
import AppMenu from '../../components/AppMenu'

export default function RewardsScreen(): JSX.Element {
    return (
        <AppContainer>
            <AppMenu />
            <Text>RewardsScreen</Text>
        </AppContainer>
    )
}

const styles = StyleSheet.create({})