import React, {useState} from 'react';
import {IconButton} from '@material-ui/core';

import {Done, DoneOutline, Delete} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const TodoTitle = styled(Grid)`
  text-align: left;
`;

const TodoAction = ({handleMarkAs, removeTodo, status}) => {
  const [icon, setIcon] = useState(
    status === 'TO_DO' ? <DoneOutline /> : <Done />
  );
  return (
    <IconButton
      onMouseEnter={() => {
        if (status === 'DONE') setIcon(<Delete />);
      }}
      onMouseLeave={() => {
        if (status === 'DONE') setIcon(<Done />);
      }}
      status={status}
      onClick={() => {
        if (status === 'TO_DO') {
          setIcon(<Delete />);
          handleMarkAs(true);
        }
        if (status === 'DONE') {
          removeTodo();
        }
      }}
      size="small"
      color="secondary"
      aria-label="add">
      {icon}
    </IconButton>
  );
};

const Todo = ({id, title, status, handleMarkAs, removeTodo}) => {
  return (
    <Grid container data-todo="">
      <Grid item xs={1}>
        <TodoAction
          status={status}
          handleMarkAs={isDone => handleMarkAs(isDone)}
          removeTodo={() => removeTodo()}
          size="small"
          color="secondary"
          aria-label="add">
          <Done />
        </TodoAction>
      </Grid>
      <TodoTitle item xs={11}>
        {title}
      </TodoTitle>
    </Grid>
  );
};

export default Todo;
