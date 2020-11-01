import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Theme from './app/theme';
//import {Timer, Checkbox} from './components/atoms';
import Home from './pages/home';
import Startquiz from './pages/startquiz';
import Quiz from './pages/quiz';
import {Header} from './app/components';

function App() {
  return (
    <>
    <Theme>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/start-quiz" component={Startquiz} />
        <Route exact path="/quiz" component={Quiz} />
      </Switch>
      {/* <Timer />
      <Checkbox/> */}
    </Theme>
    </>
  );
}

export default App;
