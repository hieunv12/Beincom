import {combineReducers} from 'redux';
// import  from './slices';
import accountSlice from './user/userSlice';
import {baseApi} from './api';
import boardsSlice from './slices/boardsSlice';
import taskSlice from './slices/taskSlice';
import statusSlice from './slices/statusSlice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  accountSlice: accountSlice,
  boards: boardsSlice,
  tasks: taskSlice,
  status: statusSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
