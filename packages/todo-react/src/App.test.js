import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from 'styled-components';
import {reactTheme} from 'todo-common/theme';
import {IntlProvider} from 'react-intl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={reactTheme}>
      <IntlProvider locale="en">
        <App />
      </IntlProvider>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
