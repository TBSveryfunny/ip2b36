import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIPThunk, selectCurrentIp } from "./currentIpSlice";

export default function CodeEntry() {
    const ip = useSelector(selectCurrentIp);
    const dispatch = useDispatch();
    const [int, setInt] = useState(ip.address);
    const [stateCode, setStateCode] = useState(ip.code);
    const [noError, setNoError] = useState(true);
    const regex = /^[0-9a-zA-Z]+$/; //this will admit letters, numbers and dashes
    const handleOnChange = (e) => {
      e.preventDefault();
      let value = e.target.value;
      setNoError(value.match(regex) || value === "");
      if (noError) {
        let newAddress = parseInt(value, 36);
        if (newAddress < 0) {
          e.target.value = '0';
          newAddress = 0;
        } else if (newAddress > 4294967295) {
          e.target.value = '1Z141Z3';
          newAddress = 4294967295;
        }
        if (value.trim().length === 0) {
          newAddress = 0;
        }
        setInt(newAddress);
        let code = newAddress.toString(36);
        setStateCode(code.toUpperCase());
        dispatch(changeIPThunk({ address: newAddress, code: code.toUpperCase() }));
      } else if (value === "") {
        setStateCode('0');
        dispatch(changeIPThunk({ address: 0, code: '0' }));
      }
    }

    return (
      <>
        <section>
          <input name="code" id="code" type="text" maxLength="7" required pattern="[0-9a-zA-Z]+" placeholder="0" defaultValue={stateCode} onChange={handleOnChange} />
          <p className="equals">=</p>
          <h5>{`${(int >> 24) & 0xFF}.${(int >> 16) & 0xFF}.${(int >> 8) & 0xFF}.${(int) & 0xFF}`}</h5>
        </section>
        <h4 style={{ display: noError ? 'none' : 'block' }} >ERROR: the code must be alphanumeric.</h4>
      </>
    );
}