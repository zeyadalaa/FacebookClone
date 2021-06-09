import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Image from './components/Image';
import Logintest from './components/Logintest';
import RegisterationTest from './components/Registrationtest';
import Poststest from './components/Poststest';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Image /> */}
    {/* <Logintest /> */}
    {/* <RegisterationTest /> */}
    <Poststest/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
