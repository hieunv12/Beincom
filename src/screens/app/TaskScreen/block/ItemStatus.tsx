import {CloseIcon, DotsHorizontalIcon, FontWithBold, PlusIcon} from '@assets';
import {AppModal, AppText} from '@components';
import {StatusInterface, taskItemInterface} from '@interfaces';
import {getTasks} from '@redux';
import {Colors, FontSize, Shadow, Spacing} from '@theme';
import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import TaskForm from '../../TaskForm/TaskForm';
import {ItemTask} from './ItemTask';
export interface ItemStatusProps {
  item: StatusInterface;
  onEdit: () => void;
  idBoard?: string;
}

export function ItemStatus(props: ItemStatusProps) {
  const {item, onEdit, idBoard} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState<taskItemInterface | null>(
    null,
  );
  const tasks = useSelector(getTasks);

  const tasksInStatus: taskItemInterface[] = useMemo(
    () =>
      tasks.filter(task => task.status === item.id && task.idBoard === idBoard),
    [tasks, item.id, idBoard],
  );

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
  // const handleReceiveDragDrop = (event: any, statusId: string) => {
  //   const draggedTask: taskItemInterface = event.dragged.payload;
  //   if (draggedTask.status !== statusId) {
  //     if (tasksInStatus?.[0]) {
  //       dispatch(updateTask({...tasksInStatus?.[0], status: statusId}));
  //     }

  //   }
  // };
  return (
    <View style={styles.container}>
      <View style={styles.headerStatus}>
        <AppText style={styles.txtStatus}>{item.name}</AppText>
        <TouchableOpacity onPress={onEdit}>
          <DotsHorizontalIcon />
        </TouchableOpacity>
      </View>

      {tasksInStatus.map(task => (
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
          idBoard={idBoard}
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
  statusContainer: {
    // backgroundColor: 'red',
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
  dragging: {
    opacity: 0.2,
  },
});
