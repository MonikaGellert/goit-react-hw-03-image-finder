import React from 'react';
import { DotLoader } from 'react-spinners';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.overlay}>
      <DotLoader size={250} color={'#BA55D3'} className={s.loader} />
    </div>
  );
}
