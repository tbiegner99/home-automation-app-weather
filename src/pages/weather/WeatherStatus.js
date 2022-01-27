import React from 'react';
import { connect } from 'react-redux';
import StatusIcon from './StatusIcon';
import WindIcon from './WindIcon';
import styles from './weatherStatus.css';
import Utilities from '../../utils/Utilities';
import Units, { American, getPreferredUnit } from '../../utils/Units';
import WeatherActionCreator from '../../actionCreators/weather/WeatherActionCreator';

class WeatherStatus extends React.Component {
  componentDidMount() {
    const { updateTimeInMinutes, onUpdateWeather } = this.props;
    if (typeof onUpdateWeather === 'function' && updateTimeInMinutes > 0) {
      const time = updateTimeInMinutes * 60 * 1000;
      this.interval = setInterval(onUpdateWeather, time);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { temperature, windSpeed, windDirection, units = {}, status } = this.props;
    const { Temperature: tempUnits = [Units.Temperature.CELCIUS] } = units;
    let convertedTemperature = '-';
    let unit = '';
    if (temperature) {
      unit = getPreferredUnit(temperature.unit, tempUnits);
      convertedTemperature = temperature.convertTo(unit).round();
    }
    return (
      <div className={styles.weatherStatus}>
        <div>
          <StatusIcon status={status} isNight={Utilities.isNight()} />
        </div>
        <div className={styles.temperature}>
          {convertedTemperature.value}&deg;{convertedTemperature.unit}
        </div>
        <div className={styles.windSpeed}>
          <WindIcon speed={windSpeed} angle={windDirection} units={units} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentWeather = state.weather.store.currentWeather.value || {};
  return {
    temperature: currentWeather.temperature,
    windSpeed: currentWeather.windSpeed,
    windDirection: currentWeather.windDirection,
    status: currentWeather.status,
    units: American,
    updateTimeInMinutes: 10
  };
};

const mapDispatchToProps = () => ({
  onUpdateWeather: () => WeatherActionCreator.getCurrentWeather()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherStatus);
