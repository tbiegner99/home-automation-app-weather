const Units = {
  Number: {
    PERCENT: '%'
  },
  Distance: {
    CENTIMETERS: 'cm',
    INCHES: 'in',
    METERS: 'm',
    KILOMETERS: 'km',
    FEET: 'ft',
    MILES: 'mi'
  },
  Temperature: {
    KELVIN: 'K',
    CELCIUS: 'C',
    FARENHEIT: 'F'
  },
  Speed: {
    METERS_PER_SECOND: 'm/s',
    MILES_PER_HOUR: 'mph',
    KILOMETERS_PER_HOUR: 'kph',
    FEET_PER_SECOND: 'ft/s',
    KNOTS: 'kn'
  },
  Angle: {
    DIRECTION: ' ',
    DEGREES: 'deg',
    RADIANS: 'rad'
  },
  Pressure: {
    PASCALS: 'Pa',
    MILLIBARS: 'mb',
    INCHES_OF_MERCURY: 'inHg'
  },
  Time: {
    HOUR_12: 'hh:mm a',
    HOUR_24: 'HH:mm'
  }
};
const Direction = {
  NORTH: 'N',
  NORTH_NORTH_EAST: 'NNE',
  NORTH_EAST: 'NE',
  EAST_NORTH_EAST: 'ENE',
  EAST: 'E',
  EAST_SOUTH_EAST: 'ESE',
  SOUTH_EAST: 'SE',
  SOUTH_SOUTH_EAST: 'SSE',
  SOUTH: 'S',
  SOUTH_SOUTH_WEST: 'SSW',
  SOUTH_WEST: 'SW',
  WEST_SOUTH_WEST: 'WSW',
  WEST: 'W',
  WEST_NORTH_WEST: 'WNW',
  NORTH_WEST: 'NW',
  NORTH_NORTH_WEST: 'NNW'
};

const DirectionOrder = [
  Direction.NORTH,
  Direction.NORTH_NORTH_EAST,
  Direction.NORTH_EAST,
  Direction.EAST_NORTH_EAST,
  Direction.EAST,
  Direction.EAST_SOUTH_EAST,
  Direction.SOUTH_EAST,
  Direction.SOUTH_SOUTH_EAST,
  Direction.SOUTH,
  Direction.SOUTH_SOUTH_WEST,
  Direction.SOUTH_WEST,
  Direction.WEST_SOUTH_WEST,
  Direction.WEST,
  Direction.WEST_NORTH_WEST,
  Direction.NORTH_WEST,
  Direction.NORTH_NORTH_WEST
];

const American = {
  Temperature: [Units.Temperature.FARENHEIT],
  Pressure: [Units.Pressure.MILLIBARS],
  Distance: [Units.Distance.FEET, Units.Distance.MILES],
  ShortDistance: [Units.Distance.INCHES, Units.Distance.MILES],
  Angle: [Units.Angle.DEGREES],
  Speed: [Units.Speed.MILES_PER_HOUR],
  Time: [Units.Time.HOUR_12]
};

const Metric = {
  Temperature: [Units.Temperature.CELCIUS],
  Pressure: [Units.Pressure.PASCALS],
  Distance: [Units.Distance.FEET, Units.Distance.MILES],
  ShortDistance: [Units.Distance.CENTIMETERS, Units.Distance.METERS],
  Angle: [Units.Angle.DEGREES],
  Speed: [Units.Speed.KILOMETERS_PER_HOUR],
  Time: [Units.Time.HOUR_24]
};

const Scientific = {
  Temperature: [Units.Temperature.KELVIN],
  Pressure: [Units.Pressure.PASCALS],
  Distance: [Units.Distance.KILOMETERS, Units.Distance.METERS],
  ShortDistance: [Units.Distance.CENTIMETERS, Units.Distance.METERS],
  Angle: [Units.Angle.RADIANS],
  Speed: [Units.Speed.METERS_PER_SECOND],
  Time: [Units.Time.HOUR_24]
};

const getPreferredUnit = (currentUnit, preferredUnits) => {
  if (!preferredUnits || preferredUnits.length === 0 || preferredUnits.indexOf(currentUnit) >= 0) {
    return currentUnit;
  }
  return preferredUnits[0];
};

export default Units;
export { American, Metric, Scientific, Direction, DirectionOrder, getPreferredUnit };
