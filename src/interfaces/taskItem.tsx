export interface taskItemInterface {
  id: string;
  name: string;
  status: string;
  description: string;
  startDate: string;
  endDate: string;
  estimatedTime: string;
  level?: 'easy' | 'medium' | 'hard' | '';
  progress?: string;
  idBoard: string;
}
export interface TaskInterface {
  id: string;
  name: string;
}

export interface WorkspaceInterface {
  id: string;
  name: string;
  tasks: TaskInterface[];
}
export interface StatusInterface {
  id: string;
  name: string;
}
