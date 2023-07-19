import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIPThunk, selectCurrentIp } from "./currentIpSlice";

export default function IPEntry() {
    const ip = useSelector(selectCurrentIp);
    const dispatch = useDispatch();
    const [int, setInt] = useState(ip.address);
    const [stateCode, setStateCode] = useState(ip.code);

    const handleOnChange = (e) => {
      e.preventDefault();
      let ipBin = (ip.address >>> 0).toString(2);
      ipBin = "0".repeat(32).substring(ipBin.length) + ipBin;
      let valb = e.target.value;
      if (valb < 0) {
        e.target.value = 0;
        valb = 0;
      } else if (valb > 255) {
        e.target.value = 255;
        valb = 255;
      }
      let replacement = (valb >>> 0).toString(2);
      replacement = "0".repeat(8).substring(replacement.length) + replacement;
      const index = Number(e.target.name) * 8;
      ipBin = ipBin.substring(0, index) + replacement + ipBin.substring(index + replacement.length);
      const newAddress = parseInt(ipBin, 2);
      setInt(newAddress);
      const code = newAddress.toString(36).toUpperCase();
      setStateCode(code);
      dispatch(changeIPThunk({ address: newAddress, code: code }));
    }

    return (
      <section className="entry">
        <input name="0" type="number" placeholder="0" defaultValue={(int >> 24) & 0xFF} onChange={handleOnChange} />
        <p>.</p>
        <input name="1" type="number" placeholder="0" defaultValue={(int >> 16) & 0xFF} onChange={handleOnChange} />
        <p>.</p>
        <input name="2" type="number" placeholder="0" defaultValue={(int >> 8) & 0xFF} onChange={handleOnChange} />
        <p>.</p>
        <input name="3" type="number" placeholder="0" defaultValue={(int) & 0xFF} onChange={handleOnChange} />
        <p className="equals">=</p>
        <h5 data-testid="codeDisplay">{stateCode}</h5>
      </section>
    );
}