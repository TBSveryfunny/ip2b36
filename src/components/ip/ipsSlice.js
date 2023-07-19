import { createSlice } from "@reduxjs/toolkit";

export const ipsSlice = createSlice({
  name: "ips",
  initialState: {
    ips: {}
  },
  reducers: {
    addIP: (state, action) => {
      const { id } = action.payload;
      state.ips[id] = action.payload;
    },
    clear: (state, action) => {
      state.ips = {};
    }
  }
});

export const addIPThunk = (ip) => {
  return (dispatch) => {
    dispatch(ipsSlice.actions.addIP(ip));
  };
};

export const clearThunk = () => {
  return (dispatch) => {
    dispatch(ipsSlice.actions.clear());
  };
};

export const selectIPs = (state) => state.ips.ips;
export const { addIP, clear } = ipsSlice.actions;
export default ipsSlice.reducer;