import {Home} from '@screens';

/* Thêm màn hình, thêm khai báo kiểu cho params tại file ./RootStackParamList.ts */

export enum SCREEN_ROUTE {
  AUTH_STACK = 'AUTH_STACK',
  MAIN_ROOT = 'MAIN_ROOT',
  MAIN_STACK = 'MAIN_STACK',
  HEAR_RATE = 'HEAR_RATE',

  HOME_PAGE = 'HOME_PAGE',
  ADD_TASK_PAGE = 'ADD_TASK_PAGE',
  MAIN_PAGE = 'MAIN_PAGE',
  DISCOVER_PAGE = 'DISCOVER_PAGE',
  ACCOUNT_PAGE = 'ACCOUNT_PAGE',
  LOGIN = 'LOGIN',

  //
  // Add new screen here
  BOARD_SCREEN = 'BOARD_SCREEN',
  TASK_SCREEN = 'TASK_SCREEN',
}

export interface RootStackParamList {
  [key: string]: any;
  [SCREEN_ROUTE.MAIN_STACK]: undefined;
  [SCREEN_ROUTE.HOME_PAGE]: undefined;
  [SCREEN_ROUTE.MAIN_PAGE]: undefined;

  [SCREEN_ROUTE.ACCOUNT_PAGE]: undefined;
  [SCREEN_ROUTE.LOGIN]: undefined;
  [SCREEN_ROUTE.AUTH_STACK]: undefined;
  [SCREEN_ROUTE.ADD_TASK_PAGE]: undefined;
  [SCREEN_ROUTE.MAIN_ROOT]: undefined;

  [SCREEN_ROUTE.DISCOVER_PAGE]: undefined;
}

export const ROUTER_BOTTOM_TAB = [
  {
    key: SCREEN_ROUTE.HOME_PAGE,
    route: Home,
  },
  {
    key: SCREEN_ROUTE.ACCOUNT_PAGE,
    route: () => Home,
  },
];
