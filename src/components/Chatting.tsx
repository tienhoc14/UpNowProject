import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { color } from '../assets/color'
import { useNavigation } from '@react-navigation/native'

export default function Chatting() {

    const navigation = useNavigation()

    const onOpenConversation = useCallback(
        () => {
            navigation.navigate('Conversation')
        },
        [],
    )

    return (
        <TouchableOpacity
            onPress={onOpenConversation}
            style={styles.container}>
            <View style={styles.avtWrapper}>
                <Image source={require('../assets/images/avatar.png')} style={styles.avatar} />
            </View>

            <View style={styles.txtWrapper}>
                <Text style={styles.txtName}>
                    Tien Hoc
                </Text>
                <Text style={styles.txtMsg}>
                    I am watching movie
                </Text>
            </View>

            <View style={styles.timeWrapper}>
                <Text style={styles.txtTime}>5 min</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 30,
        marginTop: 30,
    },
    avtWrapper: {
        backgroundColor: color.inputBG,
        padding: 10,
        borderRadius: 40,
    },
    avatar: {
        width: 60,
        height: 60,
    },
    txtWrapper: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'space-evenly'
    },
    txtName: {
        color: color.whiteColor,
        fontSize: 20,
    },
    txtMsg: {
        color: color.icon,
        fontSize: 16,
    },
    timeWrapper: {
        justifyContent: 'center'
    },
    txtTime: {
        color: color.icon,
    }
})