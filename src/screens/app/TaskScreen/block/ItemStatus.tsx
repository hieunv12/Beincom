import {CloseIcon, DotsHorizontalIcon, FontWithBold, PlusIcon} from '@assets';
import {AppModal, AppText} from '@components';
import {StatusInterface, taskItemInterface} from '@interfaces';
import {getTasks} from '@redux';
import {Colors, FontSize, Shadow, Spacing} from '@theme';
import React, {useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import TaskForm from '../../TaskForm/TaskForm';
import {ItemTask} from './ItemTask';
export interface ItemStatusProps {
  item: StatusInterface;
  onEdit: () => void;
}

export function ItemStatus(props: ItemStatusProps) {
  const {item, onEdit} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<taskItemInterface | null>(
    null,
  );
  const tasks = useSelector(getTasks);
  const handleEditTask = (task: taskItemInterface) => {
    setCurrentTask(task);
    setModalVisible(true);
  };

  const handleAddTask = () => {
    setCurrentTask(null);
    setModalVisible(true);
  };
  const renderItem = useCallback(({item}: {item: taskItemInterface}) => {
    return <ItemTask item={item} onEdit={() => handleEditTask(item)} />;
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerStatus}>
        <AppText style={styles.txtStatus}>{item.name}</AppText>
        <TouchableOpacity onPress={onEdit}>
          <DotsHorizontalIcon />
        </TouchableOpacity>
      </View>
      {tasks
        .filter(task => task.status === item.id)
        .map(task => (
          <View key={`task_${task.id}`}>{renderItem({item: task})}</View>
        ))}
      <TouchableOpacity style={styles.btnAddTask} onPress={handleAddTask}>
        <PlusIcon width={Spacing.width16} iconFillColor={Colors.gray3} />
        <AppText style={styles.txtAddTask}>Add Task</AppText>
      </TouchableOpacity>
      <AppModal
        isVisible={modalVisible}
        styleContainer={styles.modalContainer}
        style={styles.modal}
        closeModal={() => setModalVisible(false)}>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.btnClose}
          hitSlop={styles.hint}>
          <CloseIcon />
        </TouchableOpacity>
        <TaskForm
          existingTask={currentTask}
          onClose={() => setModalVisible(false)}
          status={item.id}
        />
      </AppModal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray5,
    ...Shadow.normal,
    flex: 1,
    alignSelf: 'flex-start',
    paddingVertical: Spacing.width8,
    paddingHorizontal: Spacing.width4,
    borderRadius: Spacing.width8,
    width: Spacing.width220,
  },
  txtStatus: {
    fontSize: FontSize.Font14,
    color: Colors.black,
    ...FontWithBold.Bold_600,
  },
  txtAddTask: {
    fontSize: FontSize.Font12,
    color: Colors.gray3,
    ...FontWithBold.Bold_400,

    marginLeft: Spacing.width4,
  },
  headerStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hint: {top: 25, bottom: 25, left: 25, right: 25},
  btnAddTask: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: Spacing.width8,
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  modal: {
    height: '95%',
    borderTopLeftRadius: Spacing.width16,
    borderTopRightRadius: Spacing.width16,
  },
  btnClose: {
    alignSelf: 'flex-end',
    padding: Spacing.width16,
  },
});
