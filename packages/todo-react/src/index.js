import React from 'react';
import {IntlProvider} from 'react-intl';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {reactTheme} from 'todo-common/theme';

ReactDOM.render(
  <ThemeProvider theme={reactTheme}>
    <IntlProvider locale="en">
      <App />
    </IntlProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
