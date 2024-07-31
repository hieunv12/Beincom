import {RootState} from '../rootReducer';

export const getProfileUserFromStore = (state: RootState) =>
  state.accountSlice.userProfile;
export const getTokenUserFromStore = (state: RootState) =>
  state.accountSlice.token;
