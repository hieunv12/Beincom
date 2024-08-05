// import {authApi} from '@redux';
import React, {useState} from 'react';

import {taskItem} from '@interfaces';

export const useHook = () => {
  const [tasks, setTasks] = useState<taskItem[]>([
    {id: 1, name: 'Task 1'},
    {id: 2, name: 'Task 2'},
  ]);

  const ListFooterComponent = React.useMemo((): JSX.Element => {
    return <></>;
  }, []);

  return {
    ListFooterComponent,
    tasks,
  };
};
