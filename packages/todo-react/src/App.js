import React from 'react';
import {withTheme} from 'styled-components';
import List from './components/List/List';
import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <List
          todos={[
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
          ]}
        />
      </header>
    </div>
  );
}

export default withTheme(App);
