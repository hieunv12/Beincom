import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import {goBack} from '@navigation';
import {taskItem} from '@interfaces';

export const AddTaskScreen = () => {
  const [task, setTask] = useState<Omit<taskItem, 'id'>>({
    name: '',
    description: '',
    images: [],
  });

  const handleAddTask = () => {
    // Logic to add the task
    // You may need to update this logic to properly add the task to the list in HomeScreen
    goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Name"
        value={task.name}
        onChangeText={text => setTask({...task, name: text})}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Task Description"
        value={task.description}
        onChangeText={text => setTask({...task, description: text})}
      />
      {/* Add logic to handle image URLs input */}
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  input: {
    padding: 12,
    marginVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8, // Rounded corners
    fontSize: 18,
    borderColor: '#1890ff', // Custom border color
    borderWidth: 1,
  },
});

export default AddTaskScreen;
