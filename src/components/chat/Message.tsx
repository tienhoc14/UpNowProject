import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { chatColor } from '../../assets/color'
import AntDesign from 'react-native-vector-icons/AntDesign'

const avatarURL = require('../../assets/images/avatar.png')

export default function Message({ urlImage, sender, msg, time }) {

    const styles = {
        container: {
            flexDirection: 'row',
        },
        txtTime: {
            textAlign: sender ? 'left' : 'right',
            color: chatColor.darkGray
        },
        msgWrapper: {
            backgroundColor: sender ? chatColor.white : chatColor.primary,
            borderRadius: 16,
            borderBottomRightRadius: sender ? 16 : 0,
            borderTopLeftRadius: sender ? 0 : 16,
            padding: 12,
            paddingBottom: 22,
            marginTop: 10,
        },
        msgContent: {
            color: sender ? chatColor.black : chatColor.white,
        },
        img: {
            height: 88,
            width: 88,
        },
        imgWrapper: {
            alignItems: 'flex-end'
        },
        senderWrapper: {
            flexDirection: 'row'
        },
        imgAvatar: {
            width: 36,
            height: 36,
            marginRight: 8,
            marginLeft: sender ? -20 : 0
        },
        likeIcon: {
            position: 'absolute',
            bottom: -12,
            right: 10,
            borderWidth: 1,
            padding: 5,
            borderRadius: 14,
            borderColor: chatColor.grey,
        }
    }

    const [isLike, setIsLike] = useState(false)

    const onToggleLike = useCallback(
        () => {
            setIsLike(!isLike)
        },
        [isLike],
    )


    return (
        <View style={styles.container}>
            {sender && <Image source={avatarURL} style={styles.imgAvatar} />}
            <View>
                <Text>
                    {sender}
                    <Text style={styles.txtTime}> {time}</Text>
                </Text>

                <View style={styles.msgWrapper} >
                    <Text style={styles.msgContent}>{msg}</Text>
                    {sender &&
                        <TouchableOpacity style={styles.likeIcon}>
                            <AntDesign name="like1" size={15} color={isLike ? chatColor.primary : chatColor.grey}
                                onPress={onToggleLike} />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.imgWrapper}>
                    {urlImage && <Image source={urlImage} style={styles.img} />}
                </View>
            </View>
        </View>
    )
}