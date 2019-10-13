import React from 'react';
import {withTheme} from 'styled-components';
import Grid from '@material-ui/core/Grid';

import './App.css';
import {TodoComponent} from './components/Todo';

function App(props) {
  console.log(props);
  return (
    <Grid container spacing={3} className="App" justify="space-around">
      <Grid item xs={12}>
        <header className="App-header">
          <h1>Todo Kata</h1>
        </header>
      </Grid>
      <Grid item xs={6}>
        <TodoComponent />
      </Grid>
    </Grid>
  );
}

export default withTheme(App);
