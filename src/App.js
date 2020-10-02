import React from 'react';
import {Route} from 'react-router-dom';
import Theme from './app/theme';
//import {Timer, Checkbox} from './components/atoms';
import Home from './pages/home';
import {Header} from './app/components';

function App() {
  return (
    <>
    <Theme>
      <Header/>
      <Route exact to="/" component={Home} />
      {/* <Timer />
      <Checkbox/> */}
    </Theme>
    </>
  );
}

export default App;
