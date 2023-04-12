import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { chatColor } from '../../assets/color'
import DetailTab from '../../components/chat/DetailTab'
import ChatTab from '../../components/chat/ChatTab'

const windowWidth = Dimensions.get('window').width

export default function ChatScreen() {

    const [tabSwitch, setTabSwitch] = useState(1)

    const activeStyle = {
        color: chatColor.primary,
        borderBottomColor: chatColor.primary
    }

    const onSwitchTab = useCallback(
        (index: number) => {
            setTabSwitch(index)
        },
        [tabSwitch],
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" style={styles.backIcon} />
                <Text style={styles.txtHeader}>Giao Viec</Text>
            </View>
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={[styles.btnTab, tabSwitch === 0 && activeStyle]}
                    onPress={() => onSwitchTab(0)}
                >
                    <Text style={[styles.tabTitle, tabSwitch === 0 && activeStyle]}>Chi tiet cong viec</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btnTab, tabSwitch === 1 && activeStyle]}
                    onPress={() => onSwitchTab(1)}
                >
                    <Text style={[styles.tabTitle, tabSwitch === 1 && activeStyle]}>Trao doi</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.body} >
                {tabSwitch === 0 ? <DetailTab /> : <ChatTab />}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        justifyContent: 'center',
        marginBottom: 14,
    },
    backIcon: {
        position: 'absolute'
    },
    txtHeader: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    tabsContainer: {
        flexDirection: 'row',
    },
    btnTab: {
        borderBottomWidth: 1,
        borderBottomColor: chatColor.grey,
        width: (windowWidth - 16) / 2,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: chatColor.grey
    },
    body: {
        flex: 1,
        marginTop: 16,
    }
})