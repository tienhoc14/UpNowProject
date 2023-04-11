/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppLoading from './src/components/AppLoading';
import { NotificationListener, requestUserPermission } from './src/utils/pushNotificationHelper';
import { RecoilRoot } from 'recoil';

function App(): JSX.Element {

  useEffect(() => {
    requestUserPermission()
    NotificationListener()

    return () => {

    }
  }, [])

  return (
    <RecoilRoot>
      <Provider store={store}>
        <PersistGate loading={<AppLoading />} persistor={persistor} >
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </RecoilRoot>
  );
}

export default App;
