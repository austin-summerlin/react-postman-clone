import React from 'react';
import style from './Header.css';

export default function Header() {
  return (
    <div className={style.header}>
      <p className={style.headerText}>Posty</p>
    </div>
  );
}
