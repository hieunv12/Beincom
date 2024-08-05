import {FontWithBold} from '@assets';
import {AppText} from '@components';
import {taskItem} from '@interfaces';
import {Colors, FontSize, Spacing} from '@theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
export interface ItemTaskProps {
  task: taskItem;
}

function TaskItem(props: ItemTaskProps) {
  const {task} = props;
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{task.name || 'No name'}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: Spacing.width16,
    marginVertical: Spacing.width8,
    backgroundColor: '#fff',
    borderRadius: Spacing.width4,
  },
  name: {
    fontSize: FontSize.Font14,
    color: Colors.black,
    ...FontWithBold.Bold_600,
  },
});

export default React.memo(TaskItem);
