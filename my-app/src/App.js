import React from 'react'
import './App.css';
import ToDo from './components/ToDo/Todo';
import Footerr from './components/Footerr/footerr';

function App() {

  return (
    <div className="App">
      <ToDo />
      <Footerr/>
    </div>
  );
}

export default App;