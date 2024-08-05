import {z} from 'zod';

export const taskSchema = z
  .object({
    name: z.string().nonempty('Name is required'),
    status: z.string().optional(),
    description: z.string().optional(),
    startDate: z.string().refine(date => !isNaN(Date.parse(date)), {
      message: 'Start date is required',
    }),
    endDate: z.string().refine(date => !isNaN(Date.parse(date)), {
      message: 'End date is required',
    }),
    estimatedTime: z.string().nonempty('Estimated time is required'),
    level: z.string().optional(),
    progress: z.string().optional(),
  })
  .refine(data => new Date(data.endDate) > new Date(data.startDate), {
    message: 'End date must be greater than start date',
    path: ['endDate'],
  });
