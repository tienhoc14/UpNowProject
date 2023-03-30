import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../assets/color'

const AppInput = ({ icon, placeholder, value, onChangeText, children, secureTextEntry }) => {
    return (
        <View style={style.inputWrapper}>
            {icon}
            <TextInput
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
                color={color.whiteColor}
                placeholder={placeholder}
                placeholderTextColor={color.inputPH}
                style={style.input} />
            {children}
        </View>
    )
}

export default AppInput

const style = StyleSheet.create({
    inputWrapper: {
        backgroundColor: color.inputBG,
        borderRadius: 100,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
        marginBottom: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
})