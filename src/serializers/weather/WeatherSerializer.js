import moment from 'moment';
import { ConvertableValue, Units } from '@tbiegner99/home-automation-components';

const WeatherUnits = {
  degC: Units.Temperature.CELCIUS,
  'm_s-1': Units.Speed.METERS_PER_SECOND,
  'km_h-1': Units.Speed.KILOMETERS_PER_HOUR,
  m: Units.Distance.METERS,
  'degree_(angle)': Units.Angle.DEGREES,
  Pa: Units.Pressure.PASCALS,
  percent: Units.Number.PERCENT
};

const getUnit = (unitCode, defaultUnit) => {
  if (!unitCode) {
    return defaultUnit;
  }
  return WeatherUnits[unitCode.split(':')[1]] || defaultUnit;
};

const createDistance = (obj, defaultValue, defaultUnit) => {
  let value = obj.value || defaultValue;
  return new ConvertableValue(value, getUnit(obj.unitCode, defaultUnit));
};

const createTemperature = (obj, defaultUnit) => {
  return new ConvertableValue(obj.value, getUnit(obj.unitCode, defaultUnit));
};

const createPressure = (obj, defaultUnit) => {
  return new ConvertableValue(obj.value, getUnit(obj.unitCode, defaultUnit));
};

const createSpeed = (obj, defaultUnit) => {
  const value = !obj.value ? 0 : obj.value;
  return new ConvertableValue(value, getUnit(obj.unitCode, defaultUnit));
};

const createAngle = (obj, defaultUnit) => {
  const value = !obj.value ? 0 : obj.value;
  return new ConvertableValue(value, getUnit(obj.unitCode, defaultUnit));
};

const createPercent = (obj, defaultValue) => {
  const value = !obj.value ? defaultValue : obj.value;
  return new ConvertableValue(value, getUnit(obj.unitCode, Units.Number.PERCENT));
};

class WeatherSerializer {
  fromCurrentWeatherResponse(observation) {
    const { properties } = observation;
    const presentWeather = properties.presentWeather[0] || {};
    return {
      precipitationLastHour: createDistance(
        properties.precipitationLastHour,
        0,
        Units.Distance.METERS_PER_SECOND
      ),
      timestamp: moment(properties.timestamp),
      temperature: createTemperature(properties.temperature, Units.Temperature.CELCIUS),
      dewpoint: createTemperature(properties.dewpoint, Units.Temperature.CELCIUS),
      windChill: createTemperature(properties.windChill, Units.Temperature.CELCIUS),
      heatIndex: createTemperature(properties.heatIndex, Units.Temperature.CELCIUS),
      barometricPressure: createPressure(properties.barometricPressure, Units.Pressure.PASCALS),
      windSpeed: createSpeed(properties.windSpeed, Units.Speed.METERS_PER_SECOND),
      windDirection: createAngle(properties.windDirection, Units.Angle.DEGREES),
      relativeHumidity: createPercent(properties.relativeHumidity, 0),
      status: properties.textDescription,
      intensity: presentWeather.intensity,
      modifier: presentWeather.modifier,
      weather: presentWeather.weather
    };
  }
}

export default new WeatherSerializer();
