import {Colors} from '@theme';

export const ENUM_LEVER_TASK = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
  NONE: '',
};
export const ENUM_PROGRESS_TASK = {
  '0': '0%',
  '10': '10%',
  '20': '20%',
  '30': '30%',
  '40': '40%',
  '50': '50%',
  '60': '60%',
  '70': '70%',
  '80': '80%',
  '90': '90%',
  '100': '100%',
};
export const DataProgress = [
  {label: '0%', value: '0'},
  {label: '10%', value: '10'},
  {label: '20%', value: '20'},
  {label: '30%', value: '30'},
  {label: '40%', value: '40'},
  {label: '50%', value: '50'},
  {label: '60%', value: '60'},
  {label: '70%', value: '70'},
  {label: '80%', value: '80'},
  {label: '90%', value: '90'},
  {label: '100%', value: '100'},
];
export const DataLevel = [
  {label: 'Easy', value: 'easy', color: Colors.green},
  {label: 'Medium', value: 'medium', color: Colors.yellow},
  {label: 'Hard', value: 'hard', color: Colors.red},
];
