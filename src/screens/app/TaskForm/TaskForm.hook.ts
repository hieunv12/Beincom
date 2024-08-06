import {zodResolver} from '@hookform/resolvers/zod';
import {addTask, getStatus, updateTask} from '@redux';
import {taskSchema} from '@schemas';
import {showAlertMessage} from '@utils';
import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {TaskFormProps} from './TaskForm';

export const useHook = (props: TaskFormProps) => {
  const {existingTask, onClose, status = '', idBoard} = props;
  const [visible, setVisible] = React.useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: existingTask || {
      name: '',
      status: status,
      description: '',
      startDate: '',
      endDate: '',
      estimatedTime: '',
      level: '',
      progress: '',
    },
    resolver: zodResolver(taskSchema),
  });
  const dispatch = useDispatch();
  const statuses = useSelector(getStatus);

  const onSubmit = (data: any) => {
    if (existingTask) {
      dispatch(updateTask({...existingTask, ...data, idBoard: idBoard}));
    } else {
      dispatch(addTask({id: Date.now().toString(), ...data, idBoard: idBoard}));
    }
    showAlertMessage(
      existingTask ? 'Task updated successfully' : 'Task added successfully',
    );
    reset();
    onClose();
  };
  return {
    visible,
    setVisible,
    control,
    handleSubmit,
    errors,
    statuses,
    onSubmit,
    existingTask,
    onClose,
    status,
  };
};
