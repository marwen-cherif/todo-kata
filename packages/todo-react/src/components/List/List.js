import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';
import v4 from 'uuid';
import Grid from '@material-ui/core/Grid';
import {Grow} from '@material-ui/core';

import Todo from './Todo';
const List = props => {
  const {todos, handleMarkAs, removeTodo} = props;
  const [todosMap, setTodosMap] = useState({});

  useEffect(() => {
    setTodosMap(todos.reduce((acc, item) => ({...acc, [item.id]: true}), {}));
  }, [todos]);

  return (
    <Grid item xs={12}>
      {todos.map(({title, status, id}) => {
        return (
          <Grow key={v4()} in={todosMap[id]}>
            <Grid>
              <Todo
                id={id}
                title={title}
                status={status}
                handleMarkAs={isDone => {
                  handleMarkAs(id, isDone ? 'DONE' : 'TO_DO');
                }}
                removeTodo={() => {
                  setTimeout(() => removeTodo(id), 300);
                  setTodosMap({
                    ...todosMap,
                    [id]: false,
                  });
                }}
              />
            </Grid>
          </Grow>
        );
      })}
    </Grid>
  );
};

List.propTypes = {
  todos: PropTypes.array,
};
List.defaultProps = {
  todos: [],
};

const enhancedList = withTheme(List);

export default enhancedList;
