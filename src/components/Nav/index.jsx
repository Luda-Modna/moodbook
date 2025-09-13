import React from 'react';
import { FaHome, FaBook, FaCog } from "react-icons/fa";
import styles from './Nav.module.scss';

function Nav () {
  return (
    <nav className={styles.nav}>
      <FaHome className={styles.icon} title='Головна' />
      <FaBook className={styles.icon} title='Бібліотека' />
      <FaCog className={styles.icon} title='Налаштування' />
    </nav>
  );
}

export default Nav;
