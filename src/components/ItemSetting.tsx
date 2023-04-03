import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { color } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

export default function ItemSetting({ btnTitle, arrowIcon = true, btnDelete = false, direction }) {

    const navigation = useNavigation()

    const titleColor = {
        color: btnDelete ? color.primaryColor : color.whiteColor
    }

    const onHandlePress = useCallback(
        () => {
            if (direction) {
                navigation.navigate(direction)
            }
        },
        [direction],
    )

    return (
        <TouchableOpacity
            onPress={onHandlePress}
            style={styles.button}>
            <Text style={[styles.btnTitle, titleColor]}>{btnTitle}</Text>
            {arrowIcon && <MaterialIcons name="keyboard-arrow-right" size={30} color={color.primaryColor} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        backgroundColor: color.inputBG,
        height: 52,
        marginBottom: 8
    },
    btnTitle: {
        fontWeight: '400',
        fontSize: 15,
    }
})