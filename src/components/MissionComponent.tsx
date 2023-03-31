import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { color } from '../assets/color'

export default function MissionComponent({missionTitle, missionStatus, numberMedals}) {
    return (
        <TouchableOpacity style={styles.btnMission}>
            <View style={styles.infoWrapper}>
                <Text style={styles.missionTitle}>{missionTitle}</Text>
                <Text style={styles.missionStatus}>{missionStatus}</Text>
            </View>
            <View style={styles.medalWrapper}>
                <Image source={require('../assets/images/medal.png')} />
                <Text style={styles.numberMedals}>{numberMedals}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnMission: {
        backgroundColor: color.inputBG,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 20,
        marginBottom: 8,
        justifyContent: 'space-between',
    },
    infoWrapper: {

    },
    missionTitle: {
        fontSize: 15,
        color: color.whiteColor,
        fontWeight: '500'
    },
    missionStatus: {
        color: color.drawerInactive,
        fontSize: 13,
        fontWeight: '300',
        marginTop: 10,
    },
    medalWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberMedals: {
        color: color.primaryColor,
        fontWeight: 'bold',
        fontSize: 15, 
        marginLeft: 10,
    }
})