import React from 'react';
import {Route} from 'react-router-dom';
import Theme from './app/theme';
import {Timer, Checkbox} from './components/atoms';
import Home from './pages/home'

function App() {
  return (
    <>
    <Theme>
      <Route to="/" component={Home} />
        <Timer />
        <Checkbox/>
    </Theme>
    </>
  );
}

export default App;
