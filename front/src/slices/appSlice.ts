import { createSlice, EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const ipcRenderer = window as any; ///.electron.ipcRenderer;

export interface TasksState {
  block: number;
  gas: number;
  gasRapid: number;
  status: "idle" | "loading" | "failed";
  seconds: number;
}

const initialState: TasksState = {
  block: 0,
  gas: 90,
  gasRapid: 90,
  status: "idle",
  seconds: 0,
};

let timerId: any = -1;

export const appSlice = createSlice({
  name: "app",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementSeconds: (state) => {
      state.seconds++;
    },
    changeBlock: (state, action) => {
      state.block = action.payload;
      state.seconds = 0;
    },
    changeGasPrice: (state, action) => {
      state.gas = action.payload;
    },
    changeGasRapidPrice: (state, action) => {
      console.log("changeGasRapidPrice");
      state.gasRapid = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const {
  changeBlock,
  changeGasPrice,
  changeGasRapidPrice,
  incrementSeconds,
} = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const allWallets = (state: RootState) => state.wallets.wallets;

export const selectGas = (state: RootState) => state.app.gas;
export const selectSeconds = (state: RootState) => state.app.seconds;
export const selectGasRapid = (state: RootState) => state.app.gasRapid;
export const selectBlock = (state: RootState) => state.app.block;

export default appSlice.reducer;

// class AppSlice {
//   init(store: EnhancedStore) {
//     ipcRenderer.on('state', (data: any) => {
//       if (data.block) {
//         clearInterval(timerId);
//         store.dispatch(changeBlock(data.block));

//         timerId = setInterval(() => {
//           store.dispatch(incrementSeconds());
//         }, 1000);
//       }
//     });
//   }
// }

// export const appSliceCls = new AppSlice();
