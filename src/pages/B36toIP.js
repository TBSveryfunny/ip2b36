import React from 'react';
import IPList from "../components/ip/IPList";
import CodeEntry from "../components/entry/CodeEntry";
import Buttons from "../components/buttons/Buttons";

export default function B36toIP() {
  return (
    <div className='Page'>
      <main>
        <CodeEntry />
        <Buttons />
        <IPList />
      </main>
    </div>
  );
}