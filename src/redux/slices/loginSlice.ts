import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IUser {
  email: string;
  password: string;
}

interface IState {
  loggedIn: boolean;
  users: IUser[];
}

const initialState: IState = {
  loggedIn: false,
  users: [
    {
      email: '',
      password: '',
    },
  ],
};

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
    },
  },
});

const {actions, reducer: loginReducer} = slice;
const loginActions = {
  ...actions,
};
export {loginActions, loginReducer};
