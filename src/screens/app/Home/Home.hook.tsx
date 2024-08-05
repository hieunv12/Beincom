// import {authApi} from '@redux';
import React, {useState} from 'react';

import {TaskInterface, taskItem, WorkspaceInterface} from '@interfaces';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTask, deleteWorkspace, getWordSpace} from '@redux';

export const useHookHome = () => {
  const workspaces = useSelector(getWordSpace);
  const dispatch = useDispatch();
  const [isEditingWorkspace, setIsEditingWorkspace] = useState(false);
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [currentWorkspace, setCurrentWorkspace] =
    useState<WorkspaceInterface | null>(null);
  const [currentTask, setCurrentTask] = useState<TaskInterface | null>(null);
  const handleDeleteWorkspace = (id: string) => {
    dispatch(deleteWorkspace(id));
  };

  const handleDeleteTask = (workspaceId: string, taskId: string) => {
    dispatch(deleteTask({workspaceId, taskId}));
  };
  const ListFooterComponent = React.useMemo((): JSX.Element => {
    return <></>;
  }, []);

  return {
    ListFooterComponent,
    workspaces,
    handleDeleteTask,
    handleDeleteWorkspace,
  };
};
