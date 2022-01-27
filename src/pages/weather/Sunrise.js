import React from 'react';
import moment from 'moment';
import combineClasses from 'classnames';
import { SunsetIcon, SunriseIcon } from '../../components/icons/Icons';
import Units, { American } from '../../utils/Units';
import SunsetCalculator from '../../utils/SunsetCalculator';
import { LATITUDE, LONGITUDE, ONE_HOUR } from '../../utils/Constants';

import styles from './sunrise.css';

class Sunrise extends React.Component {
  constructor(props) {
    super(props);
    const { sunrise, sunset } = new SunsetCalculator(LATITUDE, LONGITUDE).calculate();
    this.state = {
      sunrise,
      sunset
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.recalculate.bind(this), ONE_HOUR);
  }

  recalculate() {
    const { sunrise, sunset } = new SunsetCalculator(LATITUDE, LONGITUDE).calculate();
    this.setState({
      sunrise,
      sunset
    });
  }

  render() {
    const { sunrise, sunset } = this.state;
    const { className, units = {}, showDaylight } = this.props;
    const { Time: tempUnits = American.Time } = units;
    const unit = Array.isArray(tempUnits) ? tempUnits[0] : tempUnits;
    const classes = combineClasses(styles.sunset, className);
    const daylight = moment.duration(sunset.diff(sunrise)).as('hours');

    return (
      <div className={classes}>
        <div className={styles.sunData}>
          <SunriseIcon className={styles.sunIcon} />
          <div className={styles.text}>{moment(sunrise).format(unit)}</div>
        </div>
        <div className={styles.sunData}>
          <SunsetIcon className={styles.sunIcon} />
          <div className={styles.text}>{moment(sunset).format(unit)}</div>
        </div>
        {showDaylight && <b className={styles.daylight}>Daylight: {daylight.toFixed(2)} hours</b>}
      </div>
    );
  }
}

export default Sunrise;
