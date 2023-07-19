import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentIp } from "../entry/currentIpSlice";
import { addIPThunk, clearThunk, selectIPs } from "../ip/ipsSlice";
import { v4 as uuidv4 } from "uuid";

export default function Buttons() {
  const ip = useSelector(selectCurrentIp);
  const ipList = useSelector(selectIPs);
  const dispatch = useDispatch();

  const handleAddButton = (e) => {
    const date = new Date(Date.now());
    const dateString = `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    const int = ip.address;
    dispatch(addIPThunk({ id: uuidv4(), address: `${(int >> 24) & 0xFF}.${(int >> 16) & 0xFF}.${(int >> 8) & 0xFF}.${(int) & 0xFF}`, code: ip.code, date: dateString}));
  }

  const handleClearButton = (e) => {
    dispatch(clearThunk());
  }

  return (
    <section className="buttons">
      <button onClick={handleAddButton}>Add to List</button>
      <button onClick={handleClearButton}>Clear List</button>
    </section>
  );
}