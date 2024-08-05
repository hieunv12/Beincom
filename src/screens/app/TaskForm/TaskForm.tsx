// src/components/TaskForm.tsx
import {
  AppButton,
  AppConfirmDelete,
  AppDropdown,
  AppInput,
  AppInputDate,
} from '@components';
import {DataLevel, DataProgress} from '@constants';
import {taskItemInterface} from '@interfaces';
import {deleteTask} from '@redux';
import {showAlertMessage} from '@utils';
import React from 'react';
import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from './styles';
import {useHook} from './TaskForm.hook';

export interface TaskFormProps {
  existingTask?: taskItemInterface | null;
  onClose: () => void;
  status?: string;
}

const TaskForm: React.FC<TaskFormProps> = (props: TaskFormProps) => {
  const {
    visible,
    setVisible,
    control,
    handleSubmit,
    errors,
    statuses,
    onSubmit,
    existingTask,
    onClose,
  } = useHook(props);
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Controller
        name="name"
        control={control}
        render={({field: {onChange, value}}) => (
          <AppInput
            label="Name"
            placeholder="Task Name"
            value={value}
            style={styles.containerInput}
            inputStyle={styles.inputStyle}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />

      <View style={styles.viewRow}>
        <Controller
          name="startDate"
          control={control}
          render={({field: {onChange, value}}) => (
            <AppInputDate
              label="Start Date"
              placeholder="Create Date"
              value={value}
              onChangeText={onChange}
              style={[styles.containerInput, {flex: 1}]}
              inputStyle={styles.inputStyle}
              error={errors.startDate?.message}
            />
          )}
        />
        <Controller
          name="endDate"
          control={control}
          render={({field: {onChange, value}}) => (
            <AppInputDate
              label="End Date"
              placeholder="End Date"
              value={value}
              onChangeText={onChange}
              style={[styles.containerInput, {flex: 1}]}
              inputStyle={styles.inputStyle}
              error={errors.endDate?.message}
            />
          )}
        />
      </View>

      <View style={styles.viewRow}>
        <Controller
          name="estimatedTime"
          control={control}
          render={({field: {onChange, value}}) => (
            <AppInput
              label="Estimated Time (Hours)"
              placeholder="0"
              value={value}
              keyboardType={'number-pad'}
              style={[styles.containerInput, {flex: 1}]}
              inputStyle={styles.inputStyle}
              onChangeText={onChange}
              error={errors.estimatedTime?.message}
            />
          )}
        />
        {existingTask && (
          <Controller
            name="progress"
            control={control}
            render={({field: {onChange, value}}) => (
              <AppDropdown
                label="Progress (%)"
                placeholder="0"
                data={DataProgress}
                value={value}
                onChangeText={onChange}
                style={[styles.containerInput, {flex: 1}]}
                inputStyle={styles.inputStyle}
                error={errors.progress?.message}
              />
            )}
          />
        )}
      </View>

      <View style={styles.viewRow}>
        <Controller
          name="status"
          control={control}
          render={({field: {onChange, value}}) => (
            <AppDropdown
              label="Status"
              data={statuses.map(status => ({
                label: status.name,
                value: status.id,
              }))}
              placeholder="Select Status"
              value={value}
              onChangeText={onChange}
              style={[styles.containerInput, {flex: 1}]}
              inputStyle={styles.inputStyle}
              error={errors.status?.message}
            />
          )}
        />
        <Controller
          name="level"
          control={control}
          render={({field: {onChange, value}}) => (
            <AppDropdown
              label="Level"
              placeholder="Select Level"
              value={value}
              data={DataLevel}
              onChangeText={onChange}
              style={[styles.containerInput, {flex: 1}]}
              inputStyle={styles.inputStyle}
              error={errors.level?.message}
            />
          )}
        />
      </View>
      {/*  */}
      <Controller
        name="description"
        control={control}
        render={({field: {onChange, value}}) => (
          <AppInput
            label="Description"
            placeholder="Please enter task description"
            value={value || ''}
            onChangeText={onChange}
            multiline
            style={styles.containerInput}
            inputStyle={styles.inputStyleDescription}
            error={errors.description?.message}
          />
        )}
      />

      <AppButton
        label={existingTask ? 'Edit Task' : 'Add Task'}
        onPress={handleSubmit(onSubmit)}
      />
      {existingTask && (
        <AppButton
          style={styles.btnDelete}
          labelStyle={styles.txtDelete}
          label={'Delete Task'}
          onPress={() => setVisible(true)}
        />
      )}
      <AppConfirmDelete
        visible={visible}
        onClose={() => setVisible(false)}
        title="Delete Task"
        description="Are you sure you want to delete this task?"
        onConfirm={() => {
          dispatch(deleteTask(existingTask?.id));
          showAlertMessage('Task deleted successfully');
          onClose();
        }}
      />
    </KeyboardAwareScrollView>
  );
};

export default TaskForm;
