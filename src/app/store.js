import { configureStore } from "@reduxjs/toolkit";
import ipsReducer from "../components/ip/ipsSlice";
import currentIpReducer from "../components/entry/currentIpSlice";

export default configureStore({
  reducer: {
    ips: ipsReducer,
    currentIp: currentIpReducer
  },
});