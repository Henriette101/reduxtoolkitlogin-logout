import React from 'react';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
import Changecolor from './components/changecolor';
function App() {
  return (
    <div className="App">
      <Profile/>
      <Login/>
      <Changecolor/>
    </div>
  );
}

export default App;
