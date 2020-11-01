import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {GlobalStyle} from './globalStyles';
import { QuizProvider } from './contex';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Router> 
        <GlobalStyle /> 
        <App />
      </Router>
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

