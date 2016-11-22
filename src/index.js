import React from 'react';
import ReactDOM from 'react-dom';
import Label from './label';

require('./interval')();

window.addEventListener("load", () => {
  ReactDOM.render(
    React.createElement(Label, null),
    document.getElementById('main')
  );
});
