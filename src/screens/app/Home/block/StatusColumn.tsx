import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {DraxView, DraxList, DraxProvider} from 'react-native-drax';

import {statuses, tasks as initialTasks} from './data';
import {PanGestureHandler} from 'react-native-gesture-handler';
interface Task {
  id: string;
  name: string;
  status: string;
}

export const StatusColumn = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const getStatusTasks = (statusId: string) => {
    return tasks.filter(task => task.status === statusId);
  };

  const handleReceiveDragDrop = (event: any, statusId: string) => {
    const draggedTask: Task = event.dragged.payload;
    if (draggedTask.status !== statusId) {
      setTasks(prevTasks => {
        return prevTasks.map(task =>
          task.id === draggedTask.id ? {...task, status: statusId} : task,
        );
      });
    }
  };

  return (
    <DraxProvider>
      <View style={styles.container}>
        {statuses.map(status => (
          <DraxView
            key={`status-${status.id}`}
            style={styles.statusContainer}
            onReceiveDragDrop={event =>
              handleReceiveDragDrop(event, status.id)
            }>
            <Text style={styles.statusHeader}>{status.name}</Text>
            <PanGestureHandler>
              <DraxList
                data={getStatusTasks(status.id)}
                renderItemContent={({item}) => (
                  <DraxView
                    style={styles.task}
                    draggingStyle={styles.dragging}
                    longPressDelay={100}
                    dragPayload={item}>
                    <Text>{item.name}</Text>
                  </DraxView>
                )}
                keyExtractor={item => item.id}
                horizontal={false}
                scrollEnabled={true}
              />
            </PanGestureHandler>
            {/* <DraxList
              data={getStatusTasks(status.id)}
              renderItemContent={({item}) => (
                <DraxView
                  style={styles.task}
                  draggingStyle={styles.dragging}
                  dragPayload={item}>
                  <Text>{item.name}</Text>
                </DraxView>
              )}
              keyExtractor={item => item.id}
              horizontal={false}
              scrollEnabled={true}
            /> */}
          </DraxView>
        ))}
      </View>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  statusContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  statusHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  task: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  dragging: {
    opacity: 0.2,
  },
});
