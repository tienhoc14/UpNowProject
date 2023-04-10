import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { color } from '../assets/color'

export default function ActiveUser() {
    return (
        <TouchableOpacity style={styles.avtWrapper} >
            <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    avtWrapper:{
        backgroundColor: color.inputBG,
        padding: 10,
        borderRadius: 40,
        marginLeft: 10,
    },
    avatar:{
        width: 60,
        height: 60,
    }
})