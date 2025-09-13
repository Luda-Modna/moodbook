import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  togglePositiveMood,
  toggleNegativeMood,
} from './../../slices/moodSlice';
import styles from './MoodPanel.module.scss';

function MoodPanel () {
  const { positiveMoods, negativeMoods } = useSelector(state => state.moodsList);
  const dispatch = useDispatch();

  const positiveOptions = ['happy', 'adventurous', 'romantic'];
  const negativeOptions = ['sad', 'angry', 'anxious'];

  return (
    <div className={styles.moodPanel}>
      <h2>Вибери настрій</h2>

      <div className={styles.checkboxGroup}>
        {positiveOptions.map(mood => (
          <label key={mood} className={styles.checkboxLabel}>
            <input
              type='checkbox'
              checked={positiveMoods.includes(mood)}
              onChange={() => dispatch(togglePositiveMood(mood))}
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
              onChange={() => dispatch(toggleNegativeMood(mood))}
            />
            {mood}
          </label>
        ))}
      </div>

      <button>Знайти книгу</button>
    </div>
  );
}

export default MoodPanel;
