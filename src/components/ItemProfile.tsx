import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { color } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

export default function ItemProfile({ fieldTitle, fieldContent, direction }) {

    const navigation = useNavigation()

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
            <Text style={[styles.txtTitle]}>{fieldTitle}</Text>
            <Text style={[styles.txtContent]}>{fieldContent}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        backgroundColor: color.inputBG,
        height: 52,
        marginBottom: 8,
    },
    txtTitle: {
        fontWeight: '400',
        fontSize: 15,
        color: color.whiteColor,
        width: 124,
    },
    txtContent: {
        fontWeight: '400',
        fontSize: 15,
        color: color.whiteColor,
    }
})