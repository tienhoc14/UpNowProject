import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import AppContainer from '../../components/AppContainer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { color } from '../../assets/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ItemProfile from '../../components/ItemProfile'

export default function UserInforScreen() {

    const navigation = useNavigation()

    const onGoBack = useCallback(
        () => {
            navigation.goBack()
        },
        [],
    )

    return (
        <AppContainer>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={30} color={color.whiteColor} style={styles.backIcon}
                    onPress={onGoBack} />
                <Text style={styles.txtPageTitle}>User info</Text>
            </View>

            <View style={styles.avatarWrapper}>
                <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
                <TouchableOpacity style={styles.btnChangeAva}>
                    <Text style={styles.txtChangeAva}>Change profile photo</Text>
                </TouchableOpacity>
            </View>

            <View>
                <ItemProfile fieldTitle={'First name'} fieldContent={'Renata'} />
                <ItemProfile fieldTitle={'Last name'} fieldContent={'Andryshyn'} />
                <ItemProfile fieldTitle={'Email'} fieldContent={'renataandryshyn@gmail.com'} />
                <ItemProfile fieldTitle={'Password'} fieldContent={'***********'} />
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
    },
    txtPageTitle: {
        fontSize: 17,
        color: color.whiteColor,
        fontWeight: '500',
    },
    backIcon: {
        position: 'absolute',
        left: 24,
    },
    avatarWrapper: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: color.avatarBG,
        borderRadius: 50,
        marginBottom: 15,
    },
    txtChangeAva: {
        fontSize: 15,
        color: color.primaryColor,
        fontWeight: 'bold'
    }
})