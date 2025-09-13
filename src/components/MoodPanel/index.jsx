import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  togglePositiveMood,
  toggleNegativeMood,
} from './../../slices/moodSlice';
import { fetchBooks } from './../../slices/bookSlice';
import styles from './MoodPanel.module.scss';

function MoodPanel () {
  const { positiveMoods, negativeMoods } = useSelector(
    state => state.moodsList
  );
  const dispatch = useDispatch();

  const positiveOptions = ['happy', 'adventurous', 'romantic'];
  const negativeOptions = ['sad', 'angry', 'anxious'];

  const handlePositiveChange = mood => {
    dispatch(togglePositiveMood(mood));
  };

  const handleNegativeChange = mood => {
    dispatch(toggleNegativeMood(mood));
  };

  const handleFindBooks = () => {
    const moods = [...positiveMoods, ...negativeMoods];
    dispatch(fetchBooks(moods));
  };

  return (
    <div className={styles.moodPanel}>
      <h2>Вибери настрій</h2>

      <div className={styles.checkboxGroup}>
        {positiveOptions.map(mood => (
          <label key={mood} className={styles.checkboxLabel}>
            <input
              type='checkbox'
              checked={positiveMoods.includes(mood)}
              onChange={() => handlePositiveChange(mood)}
            />
            {mood}
          </label>
        ))}
      </div>

      <div className={styles.checkboxGroup}>
        {negativeOptions.map(mood => (
          <label key={mood} className={styles.checkboxLabel}>
            <input
              type='checkbox'
              checked={negativeMoods.includes(mood)}
              onChange={() => handleNegativeChange(mood)}
            />
            {mood}
          </label>
        ))}
      </div>

      <button onClick={handleFindBooks}>Знайти книгу</button>
    </div>
  );
}

export default MoodPanel;
