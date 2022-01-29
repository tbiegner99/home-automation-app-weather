import React from 'react';

import {
  Utilities,
  getPreferredUnit,
  SunriseDisplay as Sunrise,
  MetricUnits as Metric,
  WeatherStatusIcon
} from '@tbiegner99/home-automation-components';

import styles from './currentWeatherPage.css';
import WindIcon from '../WindIcon';

const DEFAULT_SYSTEM = Metric;
const TemperatureDisplay = (props) => {
  const { temperature } = props;
  if (!temperature) return null;
  return (
    <span>
      {temperature.value}&deg;{temperature.unit}
    </span>
  );
};

const ValueDisplay = (props) => {
  const { value } = props;
  return (
    <span>
      {value.value} {value.unit}
    </span>
  );
};

const convertDataForDisplay = (weatherData, units) => ({
  temperature: weatherData.temperature
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Temperature, units.Temperature))
    .round(),
  windChill:
    weatherData.windChill &&
    weatherData.windChill
      .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Temperature, units.Temperature))
      .round(),
  dewpoint: weatherData.dewpoint
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Temperature, units.Temperature))
    .round(),
  windSpeed: weatherData.windSpeed
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Speed, units.Speed))
    .round(),
  windDirection: weatherData.windDirection
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Angle, units.Angle))
    .round(),
  relativeHumidity: weatherData.relativeHumidity.round(),
  pressure: weatherData.barometricPressure
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.Pressure, units.Pressure))
    .round(),
  precipitationLastHour: weatherData.precipitationLastHour
    .convertTo(getPreferredUnit(DEFAULT_SYSTEM.ShortDistance, units.ShortDistance))
    .toFixed(3)
});

const CurrentWeatherPage = (props) => {
  if (!props.currentWeather) {
    return null;
  }
  const { currentWeather, units, sunrise, sunset } = props;
  const {
    temperature,
    pressure,
    precipitationLastHour,
    windChill,
    heatIndex,
    dewpoint,
    relativeHumidity,
    windDirection,
    windSpeed
  } = convertDataForDisplay(props.currentWeather, units);
  return (
    <div className={styles.weatherContent}>
      <div className={styles.overview}>
        <WeatherStatusIcon
          className={styles.statusIcon}
          isNight={Utilities.isNight()}
          unknownIcon
          status={currentWeather.status}
          weather={currentWeather.weather}
        />
        <div className={styles.statusText}>{currentWeather.status}</div>
        <div className={styles.windTemperature}>
          <div className={styles.temperature}>
            <div className={styles.statusText}>
              <TemperatureDisplay temperature={temperature} />
            </div>
            <div>
              Feels: <TemperatureDisplay temperature={heatIndex || windChill} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <div>
          <Sunrise
            showDaylight
            className={styles.sunrise}
            units={units}
            sunrise={sunrise}
            sunset={sunset}
          />
        </div>
        <div className={styles.wind}>
          <WindIcon
            className={styles.windIcon}
            units={units}
            angle={windDirection}
            speed={windSpeed}
          />
        </div>
        <div>
          Humidity: <ValueDisplay value={relativeHumidity} />
        </div>
        <div>
          Pressure: <ValueDisplay value={pressure} />
        </div>
        <div>
          Precipitation Last Hour: <ValueDisplay value={precipitationLastHour} />
        </div>
        <div>
          Dewpoint: <TemperatureDisplay temperature={dewpoint} />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherPage;
