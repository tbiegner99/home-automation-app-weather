import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navs/NavBar';
import CurrentTime from '../../components/elements/CurrentTime';
import ApplicationActionCreator from '../../actionCreators/ApplicationActionCreator';
import styles from './main.css';
import CurrentWeatherPage from './current/CurrentWeatherPage';
import Urls from '../../utils/Urls';
import { American } from '../../utils/Units';
import { H3 } from '../../components/elements/Headers';

const CURRENT = 'currentWeather';
const FORECAST = 'forecast';

class WeatherPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: CURRENT
    };
  }

  changeState(newState) {
    this.setState({
      display: newState
    });
  }

  renderWeatherDisplay() {
    const { display } = this.state;
    const { currentWeather, sunrise, sunset, units } = this.props;
    switch (display) {
      case CURRENT:
        return (
          <CurrentWeatherPage
            units={units}
            currentWeather={currentWeather}
            sunrise={sunrise}
            sunset={sunset}
          />
        );
      default:
        return 'Not Found';
    }
  }

  render() {
    const { onChangeUrl } = this.props;
    return (
      <div className={styles.weatherPage}>
        <NavBar onHomeClick={() => onChangeUrl(Urls.HOME)} />

        <H3 className={styles.time}>
          <CurrentTime format="dddd MMMM Do YYYY" />
          <CurrentTime format="hh:mma" />
        </H3>
        <div className={styles.options}>
          <button onClick={() => this.changeState(CURRENT)}>Current Weather</button>
          <button onClick={() => this.changeState(FORECAST)}>Forecast</button>
        </div>
        <div className={styles.content}>{this.renderWeatherDisplay()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const currentWeather = state.weather.store.currentWeather.value;
  return {
    currentWeather,
    units: American,
    updateTimeInMinutes: 10
  };
};

const mapDispatchToProps = () => ({
  onChangeUrl: (url) => {
    ApplicationActionCreator.changeUrl(url);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);
