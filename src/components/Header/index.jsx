import React from 'react';
import styles from './Header.module.scss';

function Header () {
  return (
    <header className={styles.header}>
      <img src='/logo.svg' alt='Logo' className='logo' />
      <h1>BookMood</h1>
    </header>
  );
}

export default Header;
