import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Weare from './components/Weare';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Weare/>
      <Container/>

    </div>
  );
}

export default App;
