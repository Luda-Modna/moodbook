import React from 'react';
import { useSelector } from 'react-redux';
import styles from './BookSection.module.scss';
import Header from '../Header';
import BooksList from './../BookList'

function BookSection () {
  const books = useSelector(state => state.booksList.list);

  return (
    <div className={styles.bookSection}>
      <Header />
      <div className={styles.bookContent}>
        <h2>Ласкаво просимо 📚</h2>
        <p>Обери свій настрій і ми знайдемо книгу для тебе.</p>
      </div>
      {books.length > 0 && <BooksList />}
    </div>
  );
}

export default BookSection;
