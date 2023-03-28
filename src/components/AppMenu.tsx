import { View } from 'react-native'
import React, { useCallback } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

const AppMenu = () => {
    const navigation = useNavigation()

    const onOpenDrawer = useCallback(
        () => {
            navigation.openDrawer()
        },
        [],
    )

    return (
        <View>
            <Ionicons name="reorder-three-outline" size={40} color={color.primaryColor}
                onPress={onOpenDrawer} />
        </View>
    )
}

export default AppMenu