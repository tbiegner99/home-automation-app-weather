import React from 'react';
import combineClasses from 'classnames';
import { ConvertableValue, Units, getPreferredUnit } from '@tbiegner99/home-automation-components';
import ArrowIcon from '../../icons/svg/ArrowIcon';

import styles from './windIcon.css';

const WindIcon = (props) => {
  const {
    angle = new ConvertableValue(0, Units.Angle.DEGREES),
    speed,
    units = {},
    className
  } = props;
  const { Speed: preferredUnits = [Units.Speed.KILOMETERS_PER_HOUR] } = units;
  if (!speed || !speed.unit) {
    return null;
  }
  const classes = combineClasses(className, styles.windIcon);
  const unit = getPreferredUnit(speed.unit, preferredUnits);
  console.log(speed, unit);
  const convertedSpeed = speed.convertTo(unit).round();
  const angleInDeg = angle.convertTo(Units.Angle.DEGREES);
  const style = { transform: `rotate(${angleInDeg.value}deg)` };
  return (
    <svg viewBox="0 0 12 10" className={classes}>
      <svg x="2" width="8" height="6">
        <g className={styles.arrow} style={style}>
          <ArrowIcon />
        </g>
      </svg>
      <text x="6" y="9">
        {`${convertedSpeed.value} ${convertedSpeed.unit}`}
      </text>
    </svg>
  );
};

export default WindIcon;
