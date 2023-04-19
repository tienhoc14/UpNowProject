import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { chatColor } from '../../../assets/color'
import { TextInput } from 'react-native-gesture-handler'
import Message from './Message'

const urlImage = require('../../../assets/images/avatar.png')
const msg1 = 'The point of using Lorem Ipsum is that it has a more-or-less normal diibution of letters, as opposed to using suahna Content'
const msg2 = 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.'

const windowWidth = Dimensions.get('window').width

const ChatTab = () => {
    return (
        <>
            <View style={styles.msgContainer}>
                <Message sender={'Hoang Tran'} time={'6.35PM'} msg={'Hello'} />
                <Message urlImage={urlImage} msg={msg1} time={'6.38 PM'} />
                <Message sender={'Hoang Tran'} msg={msg2} time={'6.38 PM'} />
            </View>

            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.btnAdd}>
                    <View style={styles.plusWrapper}>
                        <Entypo name="plus" size={12} color={chatColor.white} />
                    </View>
                </TouchableOpacity>

                <View style={styles.inputWrapper}>
                    <TextInput style={styles.input}
                        placeholder='Nhap noi dung'
                    />
                    <TouchableOpacity>
                        <Image source={require('../../../assets/images/send.png')} style={styles.imgSend} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default ChatTab

const styles = StyleSheet.create({
    msgContainer: {
        marginHorizontal: 40,
    },
    formContainer: {
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    btnAdd: {
        backgroundColor: chatColor.grey,
        padding: 15,
        borderRadius: 12,
        marginRight: 10,
    },
    plusWrapper: {
        backgroundColor: chatColor.primary,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    inputWrapper: {
        flex: 1,
        borderWidth: 1,
        borderColor: chatColor.grey,
        borderRadius: 8,
        height: 48,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    input: {
        flex: 1,
    },
    imgSend: {

    }
})