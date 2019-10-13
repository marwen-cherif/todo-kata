import React, {useState, useRef} from 'react';
import styled, {withTheme} from 'styled-components';
import {Button, Input, Grid} from '@material-ui/core';
import v4 from 'uuid';

const AddTodoStyled = withTheme(styled.button`
  color: ${({theme}) => theme.colors.primary};
`);

export const AddNewTodo = ({onAddNewTodo}) => {
  const [newTodo, setNewTodo] = useState('');
  const newTodoEl = useRef(null);
  return (
    <Grid container spacing={3} justify="space-around">
      <Grid item xs={9}>
        <Input
          onKeyUp={event => {
            if (event.key === 'Enter') {
              setNewTodo('');
              onAddNewTodo({id: v4(), title: newTodo, status: 'TO_DO'});
              newTodoEl.current.focus();
            }
          }}
          inputRef={newTodoEl}
          type="text"
          name="newTodo"
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
          fullWidth
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (newTodo) {
              setNewTodo('');
              onAddNewTodo({id: v4(), title: newTodo, status: 'TO_DO'});
              newTodoEl.current.focus();
            }
          }}
          fullWidth
          data-add-todo="">
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
