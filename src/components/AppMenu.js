import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

const AppMenu = () => {
    const navigation = useNavigation()
    return (
        <View>
            <Ionicons name="reorder-three-outline" size={40} color={color.primaryColor}
                onPress={() => { navigation.openDrawer() }} />
        </View>
    )
}

export default AppMenu