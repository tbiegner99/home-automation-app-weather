import React from 'react';
import { Unknown, Cloudy, Sunny, Fog, Moon, PartlyCloudy } from '../../icons/WeatherIcons';

import styles from './statusIcon.css';

const statusToIconMap = {
  Cloudy,
  Sunny,
  'Partly Cloudy': PartlyCloudy,
  Clear: Sunny,
  'Fog/Mist': Fog
};
const nightStatusIconToMap = {
  ...statusToIconMap,
  Clear: Moon
};

const getIconFromStatus = (props) => {
  const Icon = props.isNight ? nightStatusIconToMap[props.status] : statusToIconMap[props.status];
  if (!Icon) {
    if (props.unknownIcon) {
      return <Unknown className={props.className} />;
    }
    return (
      <div className={styles.unknownIconContainer}>
        <div className={styles.unknownStatus}>{status}</div>
      </div>
    );
  }
  return <Icon className={props.className} />;
};

const StatusIcon = (props) => getIconFromStatus(props);

export default StatusIcon;
