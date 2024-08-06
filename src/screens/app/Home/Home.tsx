import React from 'react';
import {StyleSheet} from 'react-native';
import {DraxProvider} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusColumn} from './block/StatusColumn';

export const Home = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DraxProvider>
        <StatusColumn />
      </DraxProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#fff',
  },
  statusColumn: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskItem: {
    padding: 16,
    marginVertical: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskText: {
    fontSize: 16,
  },
  dragHandle: {
    padding: 8,
  },
  dragText: {
    fontSize: 18,
  },
});
