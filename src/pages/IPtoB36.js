import React from 'react';
import IPList from "../components/ip/IPList";
import IPEntry from "../components/entry/IPEntry";
import Buttons from "../components/buttons/Buttons";

export default function IPtoB36() {
  return (
    <div className='Page'>
      <main>
        <IPEntry />
        <Buttons />
        <IPList />
      </main>
    </div>
  );
}