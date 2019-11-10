import React from 'react';
import {mount} from 'enzyme';

import List from '../List';
import {ThemeProvider} from 'styled-components';
import {reactTheme as theme} from 'todo-common';
import {IntlProvider} from 'react-intl';

const todos = [
  {
    title: 'Need to complete the kata using a simple react app.',
    Status: 'TO_DO',
  },
  {
    title: 'Need to complete the kata using redux.',
    Status: 'TO_DO',
  },
  {
    title:
      'Need to complete the kata using redux-saga, node server, mysql for persistance.',
    Status: 'TO_DO',
  },
];

describe('Todo.List', () => {
  it('should renders correctly', () => {
    const tree = mount(
      <ThemeProvider theme={theme}>
        <IntlProvider locale="en">
          <List todos={todos} />
        </IntlProvider>
      </ThemeProvider>
    );
    expect(tree.find('div[data-todo]').length).toBe(3);
  });
});
