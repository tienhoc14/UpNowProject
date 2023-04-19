import { Dimensions, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { chatColor } from '../../assets/color'
import DetailTab from './components/DetailTab'
import ChatTab from './components/ChatTab'
import { useNetInfo } from '@react-native-community/netinfo'

const windowWidth = Dimensions.get('window').width

export default function ChatScreen() {
    const netInfo = useNetInfo()

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

            <Modal
                animationType="slide"
                transparent={true}
                visible={!netInfo.isConnected}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modal}>
                        <Text style={styles.txtDisconected}>
                            Mất kết nối internet. Vui lòng kiểm tra kết nối wifi hoặc dữ liệu di động.
                        </Text>
                    </View>
                </View>
            </Modal>

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
        width: (windowWidth) / 2,
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
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
    },
    modal: {
        backgroundColor: chatColor.modalBG,
        justifyContent: 'center',
        position: 'absolute',
        top: '40%',
        height: 75,
        borderRadius: 8,
        marginHorizontal: 9,
        paddingHorizontal: 36,
        paddingVertical: 16,
        alignSelf: 'center',
    },
    txtDisconected: {
        textAlign: 'center',
        color: chatColor.white
    },
})