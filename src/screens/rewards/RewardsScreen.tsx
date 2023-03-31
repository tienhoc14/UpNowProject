import { Image, ScrollView, StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React, { useCallback } from 'react'
import AppContainer from '../../components/AppContainer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from '../../assets/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MissionComponent from '../../components/MissionComponent'
import { useNavigation } from '@react-navigation/native'

export default function RewardsScreen(): JSX.Element {

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
                    <TouchableOpacity style={styles.btnPoints}>
                        <Image source={require('../../assets/images/medal.png')} style={styles.imgMedal} />
                        <Text style={styles.txtPoints}>9 Points</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.prizeWrapper}>
                    <Image source={require('../../assets/images/prize.png')} />
                    <Text style={styles.txtRewards}>Rewards</Text>
                    <Text style={styles.txtDescribe}>Collect points and get savings for the next month</Text>
                </View>

                <ScrollView>
                    <View style={styles.listWrapper}>
                        <MissionComponent missionTitle={'Listen - 1 day'} missionStatus={'Achieved'} numberMedals={1} />
                        <MissionComponent missionTitle={'Listen for the first 7 consecutive days'} missionStatus={'Achieved'} numberMedals={7} />
                        <MissionComponent missionTitle={'Listen for the first 28 consecutive days'} missionStatus={'14/28'} numberMedals={28} />
                        <MissionComponent missionTitle={'Write one review'} numberMedals={50} />
                        <MissionComponent missionTitle={'Refer a friend or accept a referral'} numberMedals={10} />
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.btnSubcribe}>
                    <Text style={styles.txtSubcribe}>100 points - 5% off</Text>
                    <View style={styles.lineCenter} />
                    <Text style={styles.txtSubcribe}>150 points - 10% off</Text>
                </TouchableOpacity>
            </View>
        </AppContainer >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    backIcon: {

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnPoints: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: color.primaryColor
    },
    imgMedal: {

    },
    txtPoints: {
        fontSize: 14,
        fontWeight: 'bold',
        color: color.whiteColor,
        marginLeft: 5
    },
    prizeWrapper: {
        alignItems: 'center',
    },
    txtRewards: {
        fontWeight: '900',
        fontSize: 24,
        color: color.whiteColor,
        marginTop: 5,
        marginBottom: 10
    },
    txtDescribe: {
        color: color.whiteColor,
        fontSize: 15,
    },
    listWrapper: {
        flex: 1,
        marginTop: 20,
    },
    btnSubcribe: {
        flexDirection: 'row',
        backgroundColor: color.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 28,
        justifyContent: 'space-around',
        borderRadius: 30,
        alignItems: 'center'
    },
    lineCenter: {
        borderRightWidth: 2,
        borderRightColor: color.whiteColor,
        height: 20,
        marginHorizontal: 30,
    },
    txtSubcribe: {
        color: color.whiteColor,
        fontSize: 15,
        fontWeight: '700'
    }
})