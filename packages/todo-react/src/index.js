import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import IntlProviderWrapper from './IntlProviderWrapper';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {reactTheme, messages} from 'todo-common';

const language = navigator.language.split(/[-_]/)[0]; // language without region code
console.log(language);
ReactDOM.render(
  <ThemeProvider theme={reactTheme}>
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  </ThemeProvider>,
  document.getElementById('container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
