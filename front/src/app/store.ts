import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../slices/tasksSlice';
import settingsReducer from '../slices/settingsSlice';
import walletsReducer from '../slices/waletsSlice';
import appReducer from '../slices/appSlice';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    settings: settingsReducer,
    wallets: walletsReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
