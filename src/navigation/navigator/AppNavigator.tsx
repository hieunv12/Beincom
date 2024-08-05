import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getTokenUserFromStore} from '@redux';
import React from 'react';
import {useSelector} from 'react-redux';
import {SCREEN_ROUTE} from '../route';
import {MainStackComponent} from '../stack/MainStack';
const Stack = createStackNavigator();
//main stack app
const NavigationApp = React.forwardRef((props, ref: any) => {
  const token = useSelector(getTokenUserFromStore);

  const renderStackApp = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_ROUTE.MAIN_ROOT}
          component={MainStackComponent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        // setTimeout(() => {
        //   SplashScreen.hide();
        // }, 500);
      }}>
      {renderStackApp()}
    </NavigationContainer>
  );
});

export {NavigationApp};
