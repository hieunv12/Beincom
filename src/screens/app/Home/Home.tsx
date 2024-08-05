import {AppButton, AppHeader} from '@components';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useHookHome} from './Home.hook';
import {navigate, SCREEN_ROUTE} from '@navigation';

import TaskItem from './block/TaskItem';
import {Spacing} from '@theme';
import {HeaderHome} from './block/HeaderHome';
import {taskItemInterface} from '@interfaces';
dayjs.extend(customParseFormat);

const Home = () => {
  const {workspaces, handleDeleteTask, handleDeleteWorkspace} = useHookHome();

  const renderItem = useCallback(({item}: {item: taskItemInterface}) => {
    return <TaskItem task={item} />;
  }, []);
  return (
    <View style={styles.container}>
      <HeaderHome />
      <FlatList
        data={workspaces}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: Spacing.height8,
          paddingHorizontal: Spacing.height16,
        }}
        keyExtractor={(item, _) => `item_task_${item.id.toString()}`}
      />
      <AppButton
        label="Add Task"
        onPress={() => {
          navigate(SCREEN_ROUTE.ADD_TASK_PAGE);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f0f0f0',
  },
  task: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 16,
  },
});

export {Home};
