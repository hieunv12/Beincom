import {z} from 'zod';

export const workspaceSchema = z.object({
  name: z.string().min(1, 'Workspace name is required'),
  description: z.string().min(1, 'Workspace description is required'),
});

export const taskSchema = z.object({
  name: z.string().min(1, 'Task name is required'),
  description: z.string().min(1, 'Task description is required'),
  coverImage: z.string().optional(), // Optional field
  status: z.string().min(1, 'Task status is required'),
  creationDate: z.string().min(1, 'Creation date is required'),
  dueDate: z.string().min(1, 'Due date is required'),
});
