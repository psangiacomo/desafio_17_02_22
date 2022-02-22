import MainNavigator from './navigation';
import {Provider} from 'react-redux';
import React from 'react';
import {init} from './db';
import store from './store';

// navigation

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch(err => {
    console.log('DB initialization failed', err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
