// src/redux/workspaceSlice.js
import {TaskInterface, WorkspaceInterface} from '@interfaces';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export const initialState: WorkspaceInterface[] = [
  {
    id: '1',
    name: 'To Do',
    tasks: [
      {id: '1', name: 'Task 1'},
      {id: '2', name: 'Task 2'},
    ],
  },
  {
    id: '2',
    name: 'In Progress',
    tasks: [{id: '3', name: 'Task 3'}],
  },
  {
    id: '3',
    name: 'Done',
    tasks: [],
  },
];

const workspaceSlice = createSlice({
  name: 'workspaces',
  initialState,
  reducers: {
    addWorkspace: (state, action: PayloadAction<WorkspaceInterface>) => {
      state.push(action.payload);
    },
    editWorkspace: (
      state,
      action: PayloadAction<{id: string; name: string}>,
    ) => {
      const {id, name} = action.payload;
      const workspace = state.find(ws => ws.id === id);
      if (workspace) {
        workspace.name = name;
      }
    },
    deleteWorkspace: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(ws => ws.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    addTask: (
      state,
      action: PayloadAction<{workspaceId: string; task: TaskInterface}>,
    ) => {
      const {workspaceId, task} = action.payload;
      const workspace = state.find(ws => ws.id === workspaceId);
      if (workspace) {
        workspace.tasks.push(task);
      }
    },
    editTask: (
      state,
      action: PayloadAction<{
        workspaceId: string;
        taskId: string;
        name: string;
      }>,
    ) => {
      const {workspaceId, taskId, name} = action.payload;
      const workspace = state.find(ws => ws.id === workspaceId);
      if (workspace) {
        const task = workspace.tasks.find(task => task.id === taskId);
        if (task) {
          task.name = name;
        }
      }
    },
    deleteTask: (
      state,
      action: PayloadAction<{workspaceId: string; taskId: string}>,
    ) => {
      const {workspaceId, taskId} = action.payload;
      const workspace = state.find(ws => ws.id === workspaceId);
      if (workspace) {
        const taskIndex = workspace.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
          workspace.tasks.splice(taskIndex, 1);
        }
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        taskId: string;
        sourceWorkspaceId: string;
        destWorkspaceId: string;
      }>,
    ) => {
      const {taskId, sourceWorkspaceId, destWorkspaceId} = action.payload;
      const sourceWorkspace = state.find(ws => ws.id === sourceWorkspaceId);
      const destWorkspace = state.find(ws => ws.id === destWorkspaceId);
      const taskIndex = sourceWorkspace?.tasks.findIndex(
        task => task.id === taskId,
      );
      if (
        taskIndex !== undefined &&
        taskIndex >= 0 &&
        sourceWorkspace &&
        destWorkspace
      ) {
        const [task] = sourceWorkspace.tasks.splice(taskIndex, 1);
        destWorkspace.tasks.push(task);
      }
    },
  },
});

export const {
  addWorkspace,
  editWorkspace,
  deleteWorkspace,
  addTask,
  editTask,
  deleteTask,
  moveTask,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
