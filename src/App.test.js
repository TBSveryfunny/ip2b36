/* eslint-disable jest/valid-title */
import { render, screen, fireEvent} from '@testing-library/react';
import IPEntry from './components/entry/IPEntry';

describe(IPEntry, () => {
  // look employers, I know Jest!
  it("h5 correctly displays correct initial code", () => {
    const { getByTestId } = render(<IPEntry />);
    const val = getByTestId("codeDisplay").textContent;
    expect(val).toEqual('0');
  });
  it("IP to B36 conversion works as intended", () => {
    const { getByTestId, getByRole } = render(<IPEntry />);
    const slot1 = getByRole("input", { name: "0" });
    fireEvent.change(slot1, { target: { value: '192' } });
    const slot2 = getByRole("input", { name: "1" });
    fireEvent.change(slot2, { target: { value: '168' } });
    const slot3 = getByRole("input", { name: "2" });
    fireEvent.change(slot3, { target: { value: '0' } });
    const slot4 = getByRole("input", { name: "3" });
    fireEvent.change(slot4, { target: { value: '100' } });
    const val = getByTestId("codeDisplay").textContent;
    expect(val).toEqual('0');
  });
});
