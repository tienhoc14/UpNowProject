import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { color } from '../assets/color'

const AppInput = ({ icon, placeholder, value, onChangeText, children }) => {
    return (
        <View style={style.inputWrapper}>
            {icon}
            <TextInput
                onChangeText={onChangeText}
                value={value}
                color={'white'}
                placeholder={placeholder}
                placeholderTextColor={'#828187'}
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