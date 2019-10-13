import React, {useState} from 'react';
import styled, {withTheme} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import v4 from 'uuid';

import List from '../List/List';
import {AddNewTodo} from '../AddNewTodo';

const initialTodos = [
  {
    id: v4(),
    title: 'Need to complete the kata using a simple react app.',
    status: 'TO_DO',
  },
  {
    id: v4(),
    title: 'Need to complete the kata using redux.',
    status: 'TO_DO',
  },
  {
    id: v4(),
    title:
      'Need to complete the kata using redux-saga, node server, mysql for persistance.',
    status: 'TO_DO',
  },
];

export const TodoComponent = () => {
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Grid container spacing={3} justify="space-around">
      <List
        todos={todos}
        handleMarkAs={(id, status) =>
          setTodos(
            todos.map(todo => ({
              ...todo,
              status: id === todo.id ? status : todo.status,
            }))
          )
        }
        removeTodo={id => setTodos(todos.filter(todo => id !== todo.id))}
      />
      <AddNewTodo onAddNewTodo={newTodo => setTodos([...todos, newTodo])} />
    </Grid>
  );
};
