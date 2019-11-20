import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './page/LoginPage/LoginForm';
import RegistrationForm from './page/RegistrationPage/RegistrationForm';

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/registration">
        <RegistrationForm />
      </Route>
    </Router>
  )
}

export default App;