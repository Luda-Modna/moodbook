import React from 'react';
import styles from './BookSection.module.scss';
import Header from '../Header';

function BookSection () {
  return (
    <div className={styles.bookSection}>
      <Header />
      <div className={styles.bookContent}>
        <h2>Ласкаво просимо 📚</h2>
        <p>Обери свій настрій і ми знайдемо книгу для тебе.</p>
      </div>
    </div>
  );
}

export default BookSection;
