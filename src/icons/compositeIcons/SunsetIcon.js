import React from 'react';
import Sun from '@fortawesome/fontawesome-free/svgs/solid/sun.svg';
import ArrowDown from '@fortawesome/fontawesome-free/svgs/solid/arrow-down.svg';
import styles from './sunriseIcon.css';

const SunsetIcon = (props) => (
  <div className={props.className}>
    <svg viewBox="0 15 100 100">
      <ArrowDown x="33" y="15" width="33" height="40" />
      <svg y="20" x="15" height="70" width="70" className={styles.sun}>
        <Sun y="50%" />
      </svg>
      <line className={styles.horizon} x1="5" y1="95" x2="95" y2="95" />
    </svg>
  </div>
);

export default SunsetIcon;
