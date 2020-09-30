import React from 'react';
import {Route} from 'react-router-dom';
import Theme from './app/theme';
import {Timer, Checkbox} from './components/atoms';
import Home from './pages/home';
import Header from './app/components/header';

function App() {
  return (
    <>
    <Theme>
      <Header/>
      <Route to="/" component={Home} />
        <Timer />
        <Checkbox/>
    </Theme>
    </>
  );
}

export default App;
