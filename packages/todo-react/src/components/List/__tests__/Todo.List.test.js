import React from 'react';
import {mount} from 'enzyme';

import List from '../List';

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
    const tree = mount(<List todos={todos} />);
    expect(tree.find('div[data-todo=""]').length).toBe(3);
    expect(tree.find('[data-mark-as]').length).toBe(3);
    expect(tree.find('[data-add-todo]').length).toBe(1);
  });
});
