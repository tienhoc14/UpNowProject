import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppContainer from '../../components/AppContainer'
import AppMenu from '../../components/AppMenu'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from '../../assets/color'
import ActiveUser from '../../components/ActiveUser'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Chatting from '../../components/Chatting'

export default function ChatScreen() {
    return (
        <AppContainer>
            <AppMenu />

            <View style={styles.header} >
                <Text style={styles.txtHeader}>Message</Text>
                <FontAwesome name="pencil-square-o" size={24} color={color.whiteColor} />
            </View>

            <View style={styles.onlineWrapper}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity style={styles.searchWrapper} >
                        <AntDesign name="search1" size={40} color={color.whiteColor} />
                    </TouchableOpacity>

                    <ActiveUser />
                    <ActiveUser />
                    <ActiveUser />
                    <ActiveUser />
                </ScrollView>
            </View>

            <View style={styles.listChat}>
                <Chatting />
            </View>
        </AppContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -33,
        marginLeft: 50,
        marginRight: 20,
    },
    txtHeader: {
        fontSize: 18,
        color: color.whiteColor,
        fontWeight: 'bold'
    },
    onlineWrapper: {
        borderBottomWidth: 1,
        borderBottomColor: color.inputPH,
        paddingBottom: 20,
    },
    searchWrapper: {
        backgroundColor: color.inputBG,
        padding: 20,
        borderRadius: 40,
        marginLeft: 20,
    },
    listChat: {

    }
})