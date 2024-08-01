import React from 'react';
import {StatusBar} from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// import {NavigationApp, NavigationUtils} from '@navigation';
import {persistor, store} from '@redux';
import {Colors, ThemeProvider} from '@theme';
import {initI18n} from '@translations';
import FlashMessage from 'react-native-flash-message';
import {NavigationApp, NavigationUtils} from '@navigation';
initI18n();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationApp
              ref={(navigatorRef: any) => {
                NavigationUtils.setTopLevelNavigator(navigatorRef);
              }}
            />
            <FlashMessage
              style={{paddingTop: 10}}
              position="top"
              //  floating={true}
              hideStatusBar={false}
            />
          </PersistGate>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
