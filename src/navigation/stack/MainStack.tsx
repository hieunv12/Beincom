import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, SCREEN_ROUTE} from '../route';
import {AddTaskScreen, BoardsScreen, Home, TasksScreen} from '@screens';

const MainStack = createStackNavigator<RootStackParamList>();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      initialRouteName={SCREEN_ROUTE.BOARD_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen
        name={SCREEN_ROUTE.BOARD_SCREEN}
        component={BoardsScreen}
      />
      <MainStack.Screen
        name={SCREEN_ROUTE.TASK_SCREEN}
        component={TasksScreen}
      />
    </MainStack.Navigator>
  );
});

export {MainStackComponent};
