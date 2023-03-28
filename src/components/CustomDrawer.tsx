import { View, Text, StyleSheet, Image, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { color } from '../assets/color'

const CustomDrawer = (props: any) => {
    return (
        <View style={style.background}>

            <Image source={require('../assets/images/home-logo.png')} style={style.logoHome} />

            <View style={style.avatarWrapper}>
                <Image source={require('../assets/images/avatar.png')} style={style.avatar} />
            </View>
            <Text style={style.txtName}>James B.</Text>

            <DrawerContentScrollView {...props} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <Text style={style.txtFooter}>Powered by UpNow</Text>
        </View>
    )
}

export default CustomDrawer

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: color.backgound,
        paddingLeft: 30,
        paddingTop: Platform.OS === 'ios' ? 30 : 0
    },

    avatar: {
        width: 65,
        height: 65,
        backgroundColor: color.avatarBG,
        borderRadius: 50,
    },
    avatarWrapper: {
        backgroundColor: color.avatarCircle,
        alignSelf: 'baseline',
        borderRadius: 50,
        padding: 5,
        marginLeft: 30,
    },
    txtName: {
        color: color.whiteColor,
        // fontFamily: 'Outfit-Black',
        fontWeight: 900,
        fontSize: 24,
        marginLeft: 30,
    },
    txtFooter: {
        marginBottom: 32,
        color: color.whiteColor,
        // fontFamily: 'Outfit-Black',
        fontWeight: 300,
        fontSize: 15,
    },
    logoHome: {
        width: 63,
        height: 54,
        marginTop: 10,
        marginBottom: 20,
    }
})