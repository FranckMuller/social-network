import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader/AppHeader';
import Footer from './components/Footer/Footer';
import LoginFormContainer from './components/LoginForm/LoginFormContainer';
import RegistrationFormContainer from './components/RegistrationForm/RegistrationFormContainer';
import Layout from './components/Layout/Layout';
import 'moment/locale/ru';

import 'antd/dist/antd.css';
import styles from './App.module.scss';

const App = () => {
  useEffect(() => {
    window.addEventListener('unhandledrejection', function (event) {
      console.warn(
        'Внимание: Необработанная ошибка Promise. Позор вам! Причина: ' +
          event.reason
      );
    });
  }, []);

  return (
    <Router>
      <div className={styles.app}>
        <AppHeader />
        <main>
          <Switch>
            <Route path="/login" exact component={LoginFormContainer} />
            <Route
              path="/registration"
              exact
              component={RegistrationFormContainer}
            />
            <Route path="/" component={Layout} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
