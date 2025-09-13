import React, { useState } from 'react';
import styles from './MoodPanel.module.scss';

function MoodPanel () {
  const [positiveMoods, setPositiveMoods] = useState([]);
  const [negativeMoods, setNegativeMoods] = useState([]);

  const positiveOptions = ['happy', 'adventurous', 'romantic'];
  const negativeOptions = ['sad', 'angry', 'anxious'];

  const handlePositiveChange = mood => {
    setNegativeMoods([]);
    if (positiveMoods.includes(mood)) {
      setPositiveMoods(positiveMoods.filter(m => m !== mood));
    } else {
      setPositiveMoods([...positiveMoods, mood]);
    }
  };

  const handleNegativeChange = mood => {
    setPositiveMoods([]);
    if (negativeMoods.includes(mood)) {
      setNegativeMoods(negativeMoods.filter(m => m !== mood));
    } else {
      setNegativeMoods([...negativeMoods, mood]);
    }
  };

  return (
    <div className={styles.moodPanel}>
      <h2>Вибери настрій</h2>{' '}
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
      <button>Знайти книгу</button>
    </div>
  );
}

export default MoodPanel;
