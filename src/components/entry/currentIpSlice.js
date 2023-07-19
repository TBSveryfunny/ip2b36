import { createSlice } from "@reduxjs/toolkit";

export const currentIpSlice = createSlice({
  name: "currentIp",
  initialState: {
    currentIp: {
      address: 0,
      code: '0',
    }
  },
  reducers: {
    change: (state, action) => {
      state.currentIp = action.payload;
    }
  }
});

export const changeIPThunk = (cip) => {
  return (dispatch) => {
    dispatch(currentIpSlice.actions.change(cip));
  };
};

export const selectCurrentIp = (state) => state.currentIp.currentIp;
export const { change } = currentIpSlice.actions;
export default currentIpSlice.reducer;