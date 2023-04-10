import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import AppContainer from '../../components/AppContainer'
import AppMenu from '../../components/AppMenu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { color } from '../../assets/color'
import ItemSetting from '../../components/ItemSetting'

const SettingScreen = () => {

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
                <Text style={styles.txtPageTitle}>Settings</Text>
            </View>

            <View style={styles.mainSetting}>
                <ItemSetting btnTitle={'User Info'} direction={'UserInfo'} />
                <ItemSetting btnTitle={'My Subscriptions'} />
                <ItemSetting btnTitle={'Profile Tags'} />
            </View>

            <View style={styles.subSetting}>
                <ItemSetting btnTitle={'Terms & Conditions'} arrowIcon={false} />
                <ItemSetting btnTitle={'Privacy policy'} arrowIcon={false} />
            </View>
            <ItemSetting btnTitle={'Delete account'} arrowIcon={false} btnDelete={true} />
        </AppContainer>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
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
    mainSetting: {
        flex: 1,
    },
    subSetting: {
        marginBottom: 48
    }
})