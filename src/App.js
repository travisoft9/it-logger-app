import React, { useEffect, Fragment } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    //initialize materialize
    M.AutoInit();
  });
  return (
    <div className='App'>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Logs />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
