import {taskItem} from '@interfaces';
import {TYPE_OF_PROFILE} from '@models';

export interface accountInterface {
  token: string;
  userProfile: TYPE_OF_PROFILE;
}
export interface bottomStatusInterface {
  status: boolean;
}
export interface taskInterface {
  list: taskItem[];
}
