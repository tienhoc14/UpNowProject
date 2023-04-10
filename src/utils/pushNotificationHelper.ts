import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken()
    }
}

async function getFCMToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken')
    console.log('device token: ', fcmToken);

    if (!fcmToken) {
        try {
            const fcmToken = await messaging().getToken()

            if (fcmToken) {
                console.log('new token: ', fcmToken);

                await AsyncStorage.setItem('fcmToken', fcmToken)
            } else {

            }

        } catch (err) {
            console.log("error fcmtoken: ", err);
        }
    }
}

const NotificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                console.log(
                    'Notification caused app to open from quit state:',
                    remoteMessage.notification,
                );
            }
        });

    messaging().onMessage(async remoteMessage => {
        console.log('notification on foreground state ......', remoteMessage);
    })
}

export { requestUserPermission, NotificationListener }