import moment from 'moment';
import Units from '../../../utils/Units';
import ConvertableValue, { Temperature, Pressure } from '../../../utils/ConvertableValue';

const WeatherUnits = {
  'unit:degC': Units.Temperature.CELCIUS,
  'unit:m_s-1': Units.Speed.METERS_PER_SECOND,
  'unit:km_h-1': Units.Speed.KILOMETERS_PER_HOUR,
  'unit:m': Units.Distance.METERS,
  'unit:degree_(angle)': Units.Angle.DEGREES,
  'unit:Pa': Units.Pressure.PASCALS,
  'unit:percent': Units.Number.PERCENT
};

const createDistance = (obj, defaultValue) => {
  const value = obj.value || defaultValue;
  if (Number.isNaN(value)) return null;
  return new Temperature(value, WeatherUnits[obj.unitCode]);
};

const createTemperature = (obj) => {
  if (!obj.value) return null;
  return new Temperature(obj.value, WeatherUnits[obj.unitCode] || Units.Temperature.CELCIUS);
};

const createPressure = (obj) => {
  if (!obj.value) return null;
  return new Pressure(obj.value, WeatherUnits[obj.unitCode]);
};

const createSpeed = (obj) => {
  const value = !obj.value ? 0 : obj.value;
  return new ConvertableValue(value, WeatherUnits[obj.unitCode]);
};

const createAngle = (obj) => {
  const value = !obj.value ? 0 : obj.value;
  return new ConvertableValue(value, WeatherUnits[obj.unitCode]);
};

const createPercent = (obj, defaultValue) => {
  const value = !obj.value ? defaultValue : obj.value;
  return new ConvertableValue(value, WeatherUnits[obj.unitCode]);
};

class WeatherSerializer {
  fromCurrentWeatherResponse(observation) {
    const { properties } = observation;
    return {
      precipitationLastHour: createDistance(properties.precipitationLastHour, 0),
      timestamp: moment(properties.timestamp),
      temperature: createTemperature(properties.temperature),
      dewpoint: createTemperature(properties.dewpoint),
      windChill: createTemperature(properties.windChill),
      heatIndex: createTemperature(properties.heatIndex),
      barometricPressure: createPressure(properties.barometricPressure),
      windSpeed: createSpeed(properties.windSpeed),
      windDirection: createAngle(properties.windDirection),
      relativeHumidity: createPercent(properties.relativeHumidity, 0),
      status: properties.textDescription
    };
  }
}

export default new WeatherSerializer();
