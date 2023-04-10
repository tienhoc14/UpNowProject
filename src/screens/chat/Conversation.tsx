import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import AppContainer from '../../components/AppContainer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { color } from '../../assets/color'
import { useNavigation } from '@react-navigation/native'
import AppInput from '../../components/AppInput'

export default function Conversation({ }) {

    const navigation = useNavigation()

    const onGoBack = useCallback(
        () => {
            navigation.goBack()
        },
        [],
    )

    return (
        <AppContainer>
            <View style={styles.container}>
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={30} color={color.whiteColor} style={styles.backIcon}
                        onPress={onGoBack} />
                    <Text style={styles.chatName}>Tien Hoc</Text>
                    <Ionicons name="information-circle-outline" size={30} color={color.whiteColor} />
                </View>

                <View style={styles.chatContent} >

                </View>

                <View style={styles.inputWrapper}>
                    <AppInput
                        placeholder={'Type message...'}
                    />
                    <TouchableOpacity style={styles.sendIcon}>
                        <Ionicons name="send" size={24} color={color.primaryColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chatName: {
        color: color.whiteColor,
        fontSize: 20,
    },
    chatContent: {
        flex: 1,
    },
    inputWrapper: {
        justifyContent: 'center',
        paddingTop: 10,
    },
    sendIcon: {
        position: 'absolute',
        right: 20,
    }
})