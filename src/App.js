import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Iframe from './components/Iframe';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Terminal />
    </div>
  );
}

export default App;
