import React from 'react';

import './App.css';
import One from './Challenges/One/One';
import Three from './Challenges/Three/Three';
import Two from './Challenges/Two/Two';

function App() {
  return (
    <div className='App'>
      <One />
      <Two />
      <Three />
      <div className='card'>
        Repo:{' '}
        <a href='https://github.com/davidsolsonapuertas/MatchPint'>
          https://github.com/davidsolsonapuertas/MatchPint
        </a>
      </div>
    </div>
  );
}

export default App;
