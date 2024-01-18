// App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './store';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Redux Saga Example</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;
