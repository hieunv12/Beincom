// DraggableTask.tsx
import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

const DraggableTask: React.FC<{
  task: any;
  onDrop: (task: any, statusId: string) => void;
  onDrag: (task: any, isDragging: boolean, gestureState?: any) => void;
}> = ({task, onDrop, onDrag}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
        onDrag(task, true);
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        pan.flattenOffset();
        console.log({e}, {gestureState});
        onDrag(task, false, gestureState);
        // Determine new statusId based on drop position
        const newStatusId = determineNewStatusId(gestureState.moveY);

        onDrop(task, newStatusId);
      },
    }),
  ).current;

  const determineNewStatusId = (moveY: number) => {
    // Logic to determine new statusId based on moveY
    // This is a placeholder, replace with actual logic
    return 'newStatusId';
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[pan.getLayout(), styles.task]}>
      <Text style={styles.text}>{task.name}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default DraggableTask;
