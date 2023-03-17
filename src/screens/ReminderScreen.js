import React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import AppContainer from '../components/AppContainer'
import AppMenu from '../components/AppMenu'

const ReminderScreen = () => {

    const data = useSelector(store => store.account)

    return (
        <AppContainer>
            <AppMenu />
            <Text>{data.user}</Text>
        </AppContainer>
    )
}

export default ReminderScreen