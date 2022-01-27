import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import styles from './main.css';
import Urls from '../utils/Urls';
import ApplicationActionCreator from './actionCreators/ApplicationActionCreator';
import WeatherPage from './pages/weather/Main';

class Navigation extends React.Component {
  componentDidUpdate(prevProps) {
    const { history, currentUrl, onUpdateUrl } = this.props;

    if (prevProps.currentUrl !== currentUrl) {
      history.push(currentUrl);
    } else if (window.location.pathname !== currentUrl) {
      onUpdateUrl(window.location.pathname);
    }
  }

  render() {
    return (
      <main className={styles.mainPage}>
        <section className={styles.pageContent}>
          <Switch>
            <Route path={Urls.Weather.MAIN} component={WeatherPage} />
            <Redirect path="*" to={Urls.Weather.MAIN} />
          </Switch>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUrl: state.application.store.currentUrl.value
});

const mapDispatchToProps = () => ({
  onUpdateUrl: (url) => {
    ApplicationActionCreator.changeUrl(url);
  }
});

const ConnectedNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));

export default () => (
  <Router>
    <ConnectedNavigation />
  </Router>
);
